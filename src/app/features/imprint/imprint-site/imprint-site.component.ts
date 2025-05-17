import { Component, OnInit, afterNextRender } from '@angular/core';

import { ScrollAnimationService } from '../../../core/services/scroll-animation/scroll-animation.service';
import { SeoService } from '../../../core/services/seo/seo.service';
import { IMPRINT_IMPORTS } from '../imprint-shared';

@Component({
  selector: 'app-imprint-site',
  imports: [IMPRINT_IMPORTS],
  templateUrl: './imprint-site.component.html',
})
export class ImprintSiteComponent implements OnInit {
  activeSections: string[] = ['companyData'];

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
      'Impressum – Simon Fischer | Webentwicklung & IT-Dienstleistungen',
      'Angaben gemäß § 5 TMG zu Simon Fischer – Webentwickler für Webseiten, Onlineshops & individuelle Softwarelösungen. Hier findest du die gesetzlich vorgeschriebenen Kontaktinformationen.'
    );
  }

  toggleSection(section: string): void {
    if (this.activeSections.includes(section)) {
      this.activeSections = this.activeSections.filter((s) => s !== section);
    } else {
      this.activeSections.push(section);
    }
  }
}
