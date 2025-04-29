import { Component, AfterViewInit } from '@angular/core';

import { ScrollAnimationService } from '../../../core/services/scroll-animation/scroll-animation.service';
import { IMPRINT_IMPORTS } from '../imprint-shared';

@Component({
  selector: 'app-imprint-site',
  imports: [IMPRINT_IMPORTS],
  templateUrl: './imprint-site.component.html',
})
export class ImprintSiteComponent implements AfterViewInit {
  constructor(private scrollAnimationService: ScrollAnimationService) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.scrollAnimationService.initScrollObserver();
    }, 100);
  }
}
