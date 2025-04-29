import { Component, AfterViewInit } from '@angular/core';

import { CalendlyService } from '../../../core/services/calendly/calendly.service';
import { ScrollAnimationService } from '../../../core/services/scroll-animation/scroll-animation.service';
import { MY_OFFER_IMPORTS } from '../my-offer-shared';

@Component({
  selector: 'app-my-offer-site',
  imports: [MY_OFFER_IMPORTS],
  templateUrl: './my-offer-site.component.html',
})
export class MyOfferSiteComponent implements AfterViewInit {
  constructor(
    private scrollAnimationService: ScrollAnimationService,
    private calendlyService: CalendlyService
  ) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.scrollAnimationService.initScrollObserver();
    }, 100);
  }

  openCalendly() {
    this.calendlyService.openCalendly();
  }
}
