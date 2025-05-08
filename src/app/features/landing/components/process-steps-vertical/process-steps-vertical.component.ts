import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { ProcessStep } from '../../../../shared/models/process-step';

@Component({
  selector: 'app-process-steps-vertical',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './process-steps-vertical.component.html',
})
export class ProcessStepsVerticalComponent {
  @Input() sectionTitle: string = 'PROZESS';
  @Input() sectionSubtitle: string = 'So läuft dein <span class="text-primary">Projekt</span> ab';
  @Input() sectionDescription: string =
    'Von der ersten Idee bis zum fertigen digitalen Auftritt – ein klarer Weg zu deiner individuellen Lösung.';

  @Input() steps: ProcessStep[] = [
    {
      number: 1,
      title: 'Kostenloses Erstgespräch',
      description: 'Wir sprechen über deinen Betrieb, dein Ziel und welches Paket zu dir passt.',
    },
    {
      number: 2,
      title: 'Entscheidung für das passende Setup',
      description:
        'Ob Website, Shop oder App – du bekommst eine klare Empfehlung, was sinnvoll und realistisch ist.',
    },
    {
      number: 3,
      title: 'Umsetzung & individuelles Design',
      description:
        'Ich setze dein Projekt technisch auf, strukturiere deine Inhalte und stimme das Design auf deinen Betrieb ab.',
    },
    {
      number: 4,
      title: 'Go Live & Einführung',
      description:
        'Deine Lösung geht online – mobil optimiert, klar aufgebaut und direkt einsatzbereit. Du bekommst eine verständliche Einführung zur Pflege.',
    },
    {
      number: 5,
      title: 'Weiterentwicklung & Support (optional)',
      description:
        'Auf Wunsch begleite ich dich nach dem Launch weiter – z. B. bei Updates, Erweiterungen oder SEO.',
    },
  ];
}
