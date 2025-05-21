import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

import { localBusinessConfig } from '../../config/local-business.config';
import { packagesConfig } from '../../config/packages.config';
import { RenderService } from '../render/render.service';

/**
 * Service für die Verwaltung von Schema.org strukturierten Daten
 *
 * Dieser Service fügt strukturierte Daten (JSON-LD) zu den Seiten hinzu,
 * um Suchmaschinen besser zu verstehen, welche Inhalte auf der Seite vorhanden sind.
 */
@Injectable({
  providedIn: 'root',
})
export class SchemaService {
  constructor(
    private meta: Meta,
    private renderService: RenderService
  ) {}

  /**
   * Entfernt alle vorhandenen Schema-Tags
   */
  clearSchemas(): void {
    if (!this.renderService.isBrowser()) return;

    const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]');
    existingSchemas.forEach((tag) => tag.remove());
  }

  /**
   * Fügt strukturierte Daten für das Unternehmen hinzu (Homepage)
   */
  addLocalBusinessSchema(): void {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': localBusinessConfig.url,
      name: localBusinessConfig.name,
      description: localBusinessConfig.description,
      image: localBusinessConfig.image,
      url: localBusinessConfig.url,
      telephone: localBusinessConfig.telephone,
      email: localBusinessConfig.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: localBusinessConfig.address.street,
        addressLocality: localBusinessConfig.address.city,
        postalCode: localBusinessConfig.address.postalCode,
        addressCountry: localBusinessConfig.address.country,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: localBusinessConfig.geo.latitude,
        longitude: localBusinessConfig.geo.longitude,
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: localBusinessConfig.openingHours.days,
        opens: localBusinessConfig.openingHours.opens,
        closes: localBusinessConfig.openingHours.closes,
      },
    };

    this.addSchemaTag(schema);
  }

  /**
   * Fügt ein Angebotskatalog-Schema hinzu (für die Angebotsseite)
   */
  addOfferCatalogSchema(): void {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'OfferCatalog',
      name: 'Digitale Lösungen für Unternehmen',
      itemListElement: packagesConfig
        .filter((pkg) => pkg.enabled && pkg.category === 'web')
        .map((pkg) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: pkg.title,
            description: pkg.description,
            audience: {
              '@type': 'Audience',
              audienceType: pkg.targetUsers,
            },
          },
        })),
    };

    this.addSchemaTag(schema);
  }

  /**
   * Fügt ein branchenspezifisches Angebots-Schema hinzu (für Landingpages)
   */
  addBranchSpecificOfferSchema(branchType: 'gastro' | 'delivery'): void {
    const branchPackages = packagesConfig.filter(
      (pkg) => pkg.enabled && pkg.category === branchType
    );
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'OfferCatalog',
      name:
        branchType === 'gastro'
          ? 'Digitale Lösungen für Gastronomie'
          : 'Digitale Lösungen für Lieferdienste',
      itemListElement: branchPackages.map((pkg) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: pkg.title,
          description: pkg.description,
          audience: {
            '@type': 'Audience',
            audienceType: pkg.targetUsers,
          },
        },
      })),
    };

    this.addSchemaTag(schema);
  }

  /**
   * Fügt ein einzelnes Schema als separates Script-Tag hinzu
   */
  private addSchemaTag(schema: object): void {
    if (!this.renderService.isBrowser()) return;

    const script = document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  }
}
