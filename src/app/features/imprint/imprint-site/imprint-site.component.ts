import { Component, OnDestroy, OnInit } from '@angular/core';

import { RenderService } from '../../../core/services/render/render.service';
import { SchemaService } from '../../../core/services/schema/schema.service';
import { SeoService } from '../../../core/services/seo/seo.service';
import { IMPRINT_IMPORTS } from '../imprint-shared';

@Component({
  selector: 'app-imprint-site',
  imports: [IMPRINT_IMPORTS],
  templateUrl: './imprint-site.component.html',
})
export class ImprintSiteComponent implements OnInit, OnDestroy {
  activeSections: string[] = ['companyData'];

  constructor(
    private renderService: RenderService,
    private seoService: SeoService,
    private schemaService: SchemaService
  ) {
    this.renderService.initScrollAnimation();
  }

  ngOnInit(): void {
    this.seoService.updateMeta(
      'Impressum – Simon Fischer | Webentwicklung & IT-Dienstleistungen',
      'Angaben gemäß § 5 TMG zu Simon Fischer – Webentwickler für Webseiten, Onlineshops & individuelle Softwarelösungen. Hier findest du die gesetzlich vorgeschriebenen Kontaktinformationen.'
    );

    this.schemaService.clearSchemas();
  }

  ngOnDestroy(): void {
    this.renderService.destroyScrollAnimation();
  }

  toggleSection(section: string): void {
    if (this.activeSections.includes(section)) {
      this.activeSections = this.activeSections.filter((s) => s !== section);
    } else {
      this.activeSections.push(section);
    }
  }
}
