import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { CalendlyService } from '../../../core/services/calendly/calendly.service';

@Component({
  selector: 'app-cta-small',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cta-small.component.html',
})
export class CtaSmallComponent {
  @Input() title: string = 'Neugierig auf meine Fähigkeiten?';
  @Input() linkText: string = 'Lass uns sprechen';
  @Input() calendlyParam: string = '';

  constructor(private calendlyService: CalendlyService) {}

  openCalendly() {
    if (!this.calendlyParam || this.calendlyParam === '') {
      this.calendlyService.openCalendly();
    } else {
      this.calendlyService.openCalendly(this.calendlyParam);
    }
  }
}
