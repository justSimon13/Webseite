import { Component, OnInit, afterNextRender } from '@angular/core';

import { ScrollAnimationService } from '../../../core/services/scroll-animation/scroll-animation.service';
import { SeoService } from '../../../core/services/seo/seo.service';
import { PRIVACY_POLICY_IMPORTS } from '../privacy-policy-shared';

@Component({
  selector: 'app-privacy-policy-site',
  imports: [PRIVACY_POLICY_IMPORTS],
  templateUrl: './privacy-policy-site.component.html',
})
export class PrivacyPolicySiteComponent implements OnInit {
  activeSections: string[] = ['generalInfo'];

  constructor(
    private scrollAnimationService: ScrollAnimationService,
    private seoService: SeoService
  ) {
    afterNextRender(() => {
      setTimeout(() => {
        this.scrollAnimationService.initScrollObserver();
      }, 100);
    });
  }

  ngOnInit(): void {
    this.seoService.updateMeta(
      'Datenschutz – Simon Fischer | DSGVO-konforme Webentwicklung',
      'Erfahre, wie Simon Fischer mit deinen Daten umgeht. Transparente Informationen zur Datenverarbeitung gemäß DSGVO für Besucher, Kunden & Interessenten.'
    );
  }

  toggleSection(sectionId: string): void {
    if (this.activeSections.includes(sectionId)) {
      this.activeSections = this.activeSections.filter((id) => id !== sectionId);
    } else {
      this.activeSections.push(sectionId);
    }
  }
}
