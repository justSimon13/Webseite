import { afterNextRender, Component, OnDestroy, OnInit } from '@angular/core';

import { RenderService } from '../../../core/services/render/render.service';
import { SchemaService } from '../../../core/services/schema/schema.service';
import { SeoService } from '../../../core/services/seo/seo.service';
import { PRIVACY_POLICY_IMPORTS } from '../privacy-policy-shared';

@Component({
  selector: 'app-privacy-policy-site',
  imports: [PRIVACY_POLICY_IMPORTS],
  templateUrl: './privacy-policy-site.component.html',
})
export class PrivacyPolicySiteComponent implements OnInit, OnDestroy {
  activeSections: string[] = ['generalInfo'];

  constructor(
    private renderService: RenderService,
    private seoService: SeoService,
    private schemaService: SchemaService
  ) {
    afterNextRender(() => {
      this.renderService.reinitScrollObserver();
    });
  }

  ngOnInit(): void {
    this.seoService.updateMeta(
      'Datenschutz – Simon Fischer | DSGVO-konforme Webentwicklung',
      'Erfahre, wie Simon Fischer mit deinen Daten umgeht. Transparente Informationen zur Datenverarbeitung gemäß DSGVO für Besucher, Kunden & Interessenten.'
    );

    this.schemaService.clearSchemas();
  }

  ngOnDestroy(): void {
    this.renderService.destroyScrollAnimation();
  }

  toggleSection(sectionId: string): void {
    if (this.activeSections.includes(sectionId)) {
      this.activeSections = this.activeSections.filter((id) => id !== sectionId);
    } else {
      this.activeSections.push(sectionId);
    }
  }
}
