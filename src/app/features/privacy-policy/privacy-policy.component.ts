import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationService } from '../../core/services/scroll-animation/scroll-animation.service';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './privacy-policy.component.html',
})
export class PrivacyPolicyComponent implements AfterViewInit {
  // Speichert aktive Abschnitte des Akkordeons
  activeSections: string[] = ['generalInfo']; // Standardmäßig den ersten Abschnitt öffnen

  constructor(private scrollAnimationService: ScrollAnimationService) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.scrollAnimationService.initScrollObserver();
    }, 100);
  }

  // Toggle Funktion für Akkordeon-Sektionen
  toggleSection(sectionId: string): void {
    if (this.activeSections.includes(sectionId)) {
      // Sektion schließen
      this.activeSections = this.activeSections.filter(
        (id) => id !== sectionId
      );
    } else {
      // Sektion öffnen
      this.activeSections.push(sectionId);
    }
  }
}
