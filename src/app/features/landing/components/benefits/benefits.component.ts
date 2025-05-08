import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Benefit } from '../../../../shared/models/benefit';

@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './benefits.component.html',
})
export class BenefitsComponent {
  @Input() sectionTitle: string = 'VORTEILE';
  @Input() sectionSubtitle: string =
    'Vorteile für dein <span class="text-primary">Unternehmen</span>';
  @Input() sectionDescription: string =
    'Warum sich eine professionelle digitale Präsenz für dein Unternehmen auszahlt.';

  @Input() benefits: Benefit[] = [
    {
      icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
      title: 'Klarer Online-Auftritt',
      description:
        'Eine professionelle Präsenz schafft Vertrauen bei deinen Kunden und erhöht die Sichtbarkeit deines Unternehmens.',
    },
    {
      icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
      title: 'Mehr Conversions',
      description:
        'Moderne Systeme machen die Interaktion für deine Kunden so einfach wie möglich und steigern deinen Umsatz.',
    },
    {
      icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
      title: 'Direkte Kommunikation',
      description:
        'Bleibe mit deinen Kunden in Kontakt und baue langfristige Beziehungen auf, die sich auszahlen.',
    },
    {
      icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
      title: 'Google-optimiert',
      description:
        'Werde von potenziellen Kunden gefunden und verbessere dein Ranking in den Suchergebnissen.',
    },
    {
      icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
      title: 'Mobilfreundlich',
      description:
        'Perfekte Darstellung auf allen Geräten – von Smartphone bis Desktop, damit deine Kunden auch unterwegs mit dir interagieren können.',
    },
    {
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      title: 'Passende Lösungen',
      description:
        'Maßgeschneidert für deinen Alltag – kein Overengineering, sondern praktikable Lösungen, die funktionieren.',
    },
  ];
}
