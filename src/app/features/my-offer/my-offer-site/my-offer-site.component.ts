import { Component, AfterViewInit, OnInit } from '@angular/core';

import { CalendlyService } from '../../../core/services/calendly/calendly.service';
import { ScrollAnimationService } from '../../../core/services/scroll-animation/scroll-animation.service';
import { SeoService } from '../../../core/services/seo/seo.service';
import { MY_OFFER_IMPORTS } from '../my-offer-shared';

@Component({
  selector: 'app-my-offer-site',
  imports: [MY_OFFER_IMPORTS],
  templateUrl: './my-offer-site.component.html',
})
export class MyOfferSiteComponent implements AfterViewInit, OnInit {
  constructor(
    private seoService: SeoService,
    private scrollAnimationService: ScrollAnimationService,
    private calendlyService: CalendlyService
  ) {}

  ngOnInit(): void {
    this.seoService.updateMeta(
      'Pakete für Webentwicklung & Onlineshops | Lösungen für Unternehmen',
      'Webseite, Onlineshop oder App entwickeln lassen? Hier findest du passende Angebote – individuell, effizient & DSGVO-konform.'
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
