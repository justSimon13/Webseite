import { Component, OnInit } from '@angular/core';

import { CalendlyService } from '../../../core/services/calendly/calendly.service';
import { RenderService } from '../../../core/services/render/render.service';
import { SchemaService } from '../../../core/services/schema/schema.service';
import { SeoService } from '../../../core/services/seo/seo.service';
import { HOME_IMPORTS } from '../home-shared';

@Component({
  selector: 'app-home-site',
  imports: [HOME_IMPORTS],
  templateUrl: './home-site.component.html',
})
export class HomeSiteComponent implements OnInit {
  constructor(
    private seoService: SeoService,
    private calendlyService: CalendlyService,
    private renderService: RenderService,
    private schemaService: SchemaService
  ) {
    this.renderService.initScrollAnimation();
  }

  ngOnInit(): void {
    this.seoService.updateMeta(
      'Webentwicklung für Unternehmen – Simon Fischer | Webseiten, Shops & Apps',
      'Individuelle Webseiten, Onlineshops & Software – für Unternehmen, die digital durchstarten wollen. Modern, effizient & verständlich umgesetzt.',
      '/',
      'assets/home-preview.jpg'
    );

    this.schemaService.addLocalBusinessSchema();
    this.schemaService.addServiceSchema({
      name: 'Webentwicklung & Softwarelösungen',
      description:
        'Professionelle Webentwicklung für Unternehmen - von der individuellen Webseite bis zur maßgeschneiderten Softwarelösung.',
      image: 'https://simonfischer.dev/assets/service-preview.jpg',
    });
  }

  openCalendly() {
    this.calendlyService.openCalendly();
  }
}
