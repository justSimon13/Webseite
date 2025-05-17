import { Component, OnInit } from '@angular/core';

import { CalendlyService } from '../../../core/services/calendly/calendly.service';
import { RenderService } from '../../../core/services/render/render.service';
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
    private renderService: RenderService
  ) {
    this.renderService.initScrollAnimation();
  }

  ngOnInit(): void {
    this.seoService.updateMeta(
      'Webentwicklung für Unternehmen – Simon Fischer | Webseiten, Shops & Apps',
      'Individuelle Webseiten, Onlineshops & Software – für Unternehmen, die digital durchstarten wollen. Modern, effizient & verständlich umgesetzt.'
    );
  }

  openCalendly() {
    this.calendlyService.openCalendly();
  }
}
