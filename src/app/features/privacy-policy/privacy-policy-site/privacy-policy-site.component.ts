import { Component, AfterViewInit } from '@angular/core';

import { ScrollAnimationService } from '../../../core/services/scroll-animation/scroll-animation.service';
import { PRIVACY_POLICY_IMPORTS } from '../privacy-policy-shared';

@Component({
  selector: 'app-privacy-policy-site',
  imports: [PRIVACY_POLICY_IMPORTS],
  templateUrl: './privacy-policy-site.component.html',
})
export class PrivacyPolicySiteComponent implements AfterViewInit {
  activeSections: string[] = ['generalInfo'];

  constructor(private scrollAnimationService: ScrollAnimationService) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.scrollAnimationService.initScrollObserver();
    }, 100);
  }

  toggleSection(sectionId: string): void {
    if (this.activeSections.includes(sectionId)) {
      this.activeSections = this.activeSections.filter((id) => id !== sectionId);
    } else {
      this.activeSections.push(sectionId);
    }
  }
}
