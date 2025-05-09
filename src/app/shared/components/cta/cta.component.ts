import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { CalendlyService } from '../../../core/services/calendly/calendly.service';

@Component({
  selector: 'app-cta',
  imports: [CommonModule],
  templateUrl: './cta.component.html',
})
export class CtaComponent {
  @Input() title: string =
    'Du willst dein digitales <span class="text-primary font-bold">Projekt</span> starten?';
  @Input() description: string =
    'Egal ob Website, Onlineshop oder individuelle Anwendung – gemeinsam finden wir die beste Lösung für dein Vorhaben.';
  @Input() buttonText: string = 'Erstgespräch vereinbaren';
  @Input() linkText: string = 'Oder informiere dich über meine Angebote';
  @Input() linkUrl: string = '/mein-angebot';
  @Input() calendlyParam: string = '';

  constructor(private calendlyService: CalendlyService) {}

  openCalendly() {
    this.calendlyService.openCalendly(this.calendlyParam);
  }
}
