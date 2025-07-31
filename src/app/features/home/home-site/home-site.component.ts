import { afterNextRender, Component, OnDestroy, OnInit } from '@angular/core';

import { CalendlyService } from '../../../core/services/calendly/calendly.service';
import { RenderService } from '../../../core/services/render/render.service';
import { SchemaService } from '../../../core/services/schema/schema.service';
import { SeoService } from '../../../core/services/seo/seo.service';
import { StrapiService } from '../../../core/services/strapi/strapi-service.service';
import { FeaturedPostComponent } from '../components/featured-post/featured-post.component';
import { HOME_IMPORTS } from '../home-shared';

@Component({
  selector: 'app-home-site',
  imports: [HOME_IMPORTS, FeaturedPostComponent],
  templateUrl: './home-site.component.html',
})
export class HomeSiteComponent implements OnInit, OnDestroy {
  constructor(
    private seoService: SeoService,
    private calendlyService: CalendlyService,
    private renderService: RenderService,
    private schemaService: SchemaService,
    private strapiService: StrapiService
  ) {
    afterNextRender(() => {
      this.renderService.reinitScrollObserver();
    });
  }

  ngOnInit(): void {
    this.seoService.updateMeta(
      'Webentwicklung für Unternehmen – Simon Fischer | Webseiten, Shops & Apps',
      'Individuelle Webseiten, Onlineshops & Software – für Unternehmen, die digital durchstarten wollen. Modern, effizient & verständlich umgesetzt.',
      '/'
    );

    this.schemaService.clearSchemas();
    this.schemaService.addLocalBusinessSchema();
  }

  ngOnDestroy(): void {
    this.renderService.destroyScrollAnimation();
  }

  openCalendly() {
    this.calendlyService.openCalendly();
  }
}
