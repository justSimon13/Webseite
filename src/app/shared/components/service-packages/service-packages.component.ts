import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { CalendlyService } from '../../../core/services/calendly/calendly.service';
import { ServicePackage } from '../../models/service-package';

@Component({
  selector: 'app-service-packages',
  templateUrl: './service-packages.component.html',
  imports: [CommonModule],
})
export class ServicePackagesComponent {
  @Input() sectionTitle: string = 'Pakete';
  @Input() sectionSubtitle: string =
    'Professionelle Webentwicklung für Unternehmen – <span class="text-primary">Angebote im Vergleich</span>';
  @Input() sectionDescription: string =
    'Ob individuelle Webseite, Online-Shop oder Softwarelösung – hier findest du das passende Paket für dein Unternehmen.';
  @Input() packages: ServicePackage[] = [];

  constructor(private calendlyService: CalendlyService) {}

  openCalendly(paket: string) {
    this.calendlyService.openCalendly(paket);
  }
}
