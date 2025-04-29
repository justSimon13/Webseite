import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Testimonial } from '../../../../shared/models/testimonial';

@Component({
  selector: 'app-testimonials-mini',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials-mini.component.html',
})
export class TestimonialsMiniComponent implements OnInit, OnDestroy {
  testimonials: Testimonial[] = [
    {
      text: 'Die Zusammenarbeit mit Simon war unkompliziert, schnell und absolut professionell. Besonders beeindruckt hat uns seine Fähigkeit, technische Themen verständlich zu erklären und zielgerichtet umzusetzen.',
      author: 'Max Mustermann',
      company: 'Firma XY',
    },
    {
      text: 'Simon hat unsere Webseite komplett überarbeitet und modernisiert. Das Ergebnis übertrifft unsere Erwartungen und die Conversion-Rate ist deutlich gestiegen.',
      author: 'Laura Schmidt',
      company: 'Digital Media GmbH',
    },
    {
      text: 'Wir schätzen besonders die transparente Kommunikation und Simons Fähigkeit, sich schnell in unsere Branche einzuarbeiten. Die Zusammenarbeit werden wir definitiv fortsetzen.',
      author: 'Thomas Weber',
      company: 'Easydays Solutions',
    },
  ];

  currentIndex = 0;
  private intervalId!: number;
  private switchInterval = 5000;
  private animationDuration = 500;

  showing = true;

  ngOnInit() {
    this.intervalId = window.setInterval(() => {
      this.showing = false;
      setTimeout(() => {
        this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
        this.showing = true;
      }, this.animationDuration);
    }, this.switchInterval);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
