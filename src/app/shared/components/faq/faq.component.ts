import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { FaqItem } from '../../models/faq-item';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
})
export class FaqComponent {
  @Input() sectionTitle: string = 'Häufig gestellte Fragen';
  @Input() sectionSubtitle: string = 'Häufig gestellte <span class="text-primary">Fragen</span>';
  @Input() sectionDescription: string =
    'Hier findest du Antworten auf die wichtigsten Fragen rund um meine digitalen Lösungen.';

  @Input() faqItems: FaqItem[] = [];

  toggleFaq(index: number): void {
    this.faqItems[index].isOpen = !this.faqItems[index].isOpen;
  }
}
