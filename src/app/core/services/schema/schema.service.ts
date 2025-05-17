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
   * Fügt strukturierte Daten für eine lokale Dienstleistung hinzu
   */
  addLocalBusinessSchema(): void {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: this.config.business.name,
      image: this.config.business.image,
      '@id': this.config.business.url,
      url: this.config.business.url,
      telephone: this.config.business.telephone,
      description: this.config.business.description,
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
   * Fügt strukturierte Daten für einen Service/Dienstleistung hinzu
   */
  addServiceSchema(service: {
    name: string;
    description: string;
    price?: string;
    image?: string;
  }): void {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.name,
      description: service.description,
      provider: {
        '@type': 'ProfessionalService',
        name: this.config.business.name,
        url: this.config.business.url,
      },
      ...(service.price && {
        offers: {
          '@type': 'Offer',
          price: service.price,
          priceCurrency: 'EUR',
        },
      }),
      ...(service.image && { image: service.image }),
    };

    this.addSchemaTag(schema);
  }

  /**
   * Fügt ein benutzerdefiniertes Schema zur Seite hinzu
   * @param schema Das Schema-Objekt, das hinzugefügt werden soll
   */
  addSchemaTag(schema: object): void {
    if (!this.renderService.isBrowser()) return;

    // Entferne vorhandene Schema-Tags
    const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]');
    existingSchemas.forEach((tag) => tag.remove());

    // Füge neues Schema hinzu
    const script = document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  }
}
