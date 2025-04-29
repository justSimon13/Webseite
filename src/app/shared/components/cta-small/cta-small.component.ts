import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { CalendlyService } from '../../../core/services/calendly/calendly.service';

@Component({
  selector: 'app-cta-small',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cta-small.component.html',
})
export class CtaSmallComponent {
  constructor(private calendlyService: CalendlyService) {}

  openCalendly() {
    this.calendlyService.openCalendly();
  }
}
