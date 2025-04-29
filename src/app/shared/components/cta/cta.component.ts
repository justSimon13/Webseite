import { Component } from '@angular/core';

import { CalendlyService } from '../../../core/services/calendly/calendly.service';

@Component({
  selector: 'app-cta',
  imports: [],
  templateUrl: './cta.component.html',
})
export class CtaComponent {
  constructor(private calendlyService: CalendlyService) {}

  openCalendly() {
    this.calendlyService.openCalendly();
  }
}
