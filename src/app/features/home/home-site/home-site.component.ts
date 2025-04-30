import { Component, AfterViewInit, OnInit } from '@angular/core';

import { CalendlyService } from '../../../core/services/calendly/calendly.service';
import { ScrollAnimationService } from '../../../core/services/scroll-animation/scroll-animation.service';
import { SeoService } from '../../../core/services/seo/seo.service';
import { HOME_IMPORTS } from '../home-shared';

@Component({
  selector: 'app-home-site',
  imports: [HOME_IMPORTS],
  templateUrl: './home-site.component.html',
})
export class HomeSiteComponent implements AfterViewInit, OnInit {
  constructor(
    private seoService: SeoService,
    private scrollAnimationService: ScrollAnimationService,
    private calendlyService: CalendlyService
  ) {}

  ngOnInit(): void {
    this.seoService.updateMeta(
      'Webentwicklung für Unternehmen – Simon Fischer | Webseiten, Shops & Apps',
      'Individuelle Webseiten, Onlineshops & Software – für Unternehmen, die digital durchstarten wollen. Modern, effizient & verständlich umgesetzt.'
    );
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.scrollAnimationService.initScrollObserver();
    }, 100);
  }

  openCalendly() {
    this.calendlyService.openCalendly();
  }
}
