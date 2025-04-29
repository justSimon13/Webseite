import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface FaqItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
})
export class FaqComponent {
  faqItems: FaqItem[] = [
    {
      question: 'Wie lange dauert es, eine Webseite oder Web-App zu entwickeln?',
      answer:
        'Je nach Umfang dauert die Umsetzung einer Webseite ca. 2-4 Wochen, bei einer App oder individualisierten Softwarelösungen kann es einige Monate in Anspruch nehmen.',
      isOpen: false,
    },
    {
      question:
        'Kann ich meine Webseite oder Webanwendung später selbst bearbeiten oder erweitern?',
      answer:
        'Bei Wordpress und Shopify kannst du viele Inhalte und Texte selbst pflegen – du bekommst dafür eine einfache Plattform. Bei individuell entwickelten Lösungen ist es möglich teilweise selbst zu erweitern.',
      isOpen: false,
    },
    {
      question: 'Was ist ein MVP (Minimum Viable Product) und wann lohnt sich das?',
      answer:
        'Ein MVP ist eine einfache erste Version deiner Software oder App, die du schon einmal testen kannst. Es kann sich lohnen, wenn du wenig Budget hast und erstmal ein Proof of Concept brauchst oder erste Nutzer überzeugen willst.',
      isOpen: false,
    },
    {
      question: 'Sind die Webseiten und Onlineshops DSGVO-konform und rechtssicher?',
      answer:
        'Ja - Ich kümmere mich darum, dass deine Webseite unter allen technischen DSGVO-konform startet. Impressum, Datenschutzerklärung über die Datenspeicherung und weitere wichtige erklärische Anforderungen an Text und Rechten auf der anderen Seite sind ebenfalls zu beachten, hierfür empfehle ich zusätzlich eine rechtliche Prüfung durch einen Anwalt.',
      isOpen: false,
    },
  ];

  toggleFaq(index: number): void {
    this.faqItems[index].isOpen = !this.faqItems[index].isOpen;
  }
}
