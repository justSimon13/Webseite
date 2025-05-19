import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

import { environment } from '../../../../environments/environment';
import { RenderService } from '../render/render.service';

@Injectable({
  providedIn: 'root',
})
export class SchemaService {
  private readonly config = environment.schema;

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
      '@id': this.config.business.url,
      name: this.config.business.name,
      description: this.config.business.description,
      image: this.config.business.image,
      url: this.config.business.url,
      telephone: this.config.business.telephone,
      email: this.config.business.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: this.config.business.address.street,
        addressLocality: this.config.business.address.city,
        postalCode: this.config.business.address.postalCode,
        addressCountry: this.config.business.address.country,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: this.config.business.geo.latitude,
        longitude: this.config.business.geo.longitude,
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: this.config.business.openingHours.days,
        opens: this.config.business.openingHours.opens,
        closes: this.config.business.openingHours.closes,
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
      name: this.config.services.main.name,
      itemListElement: this.config.services.main.offers.map((offer) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          ...offer,
        },
      })),
    };

    this.addSchemaTag(schema);
  }

  /**
   * Fügt ein branchenspezifisches Angebots-Schema hinzu (für Landingpages)
   */
  addBranchSpecificOfferSchema(branchType: 'gastro' | 'lieferdienst'): void {
    const branchServices = this.config.services[branchType];
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'OfferCatalog',
      name: branchServices.name,
      itemListElement: branchServices.offers.map((offer) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          ...offer,
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
