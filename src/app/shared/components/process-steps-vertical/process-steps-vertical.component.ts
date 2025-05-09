import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
  highlight?: string;
}

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

  @Input() steps: ProcessStep[] = [];
}
