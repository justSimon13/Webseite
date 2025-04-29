import { Component, AfterViewInit } from '@angular/core';

import { CalendlyService } from '../../../core/services/calendly/calendly.service';
import { ScrollAnimationService } from '../../../core/services/scroll-animation/scroll-animation.service';
import { HOME_IMPORTS } from '../home-shared';

@Component({
  selector: 'app-home-site',
  imports: [HOME_IMPORTS],
  templateUrl: './home-site.component.html',
})
export class HomeSiteComponent implements AfterViewInit {
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
