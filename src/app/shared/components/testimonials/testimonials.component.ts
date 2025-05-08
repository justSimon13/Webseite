import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Testimonial {
  text: string;
  author: string;
  company: string;
}

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  imports: [CommonModule],
})
export class TestimonialsComponent {
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

  currentTestimonialIndex = 0;
  currentTestimonial: Testimonial = this.testimonials[0];

  constructor() {}

  nextTestimonial(): void {
    this.currentTestimonialIndex = (this.currentTestimonialIndex + 1) % this.testimonials.length;
    this.currentTestimonial = this.testimonials[this.currentTestimonialIndex];
  }

  prevTestimonial(): void {
    this.currentTestimonialIndex =
      (this.currentTestimonialIndex - 1 + this.testimonials.length) % this.testimonials.length;
    this.currentTestimonial = this.testimonials[this.currentTestimonialIndex];
  }

  setTestimonial(index: number): void {
    this.currentTestimonialIndex = index;
    this.currentTestimonial = this.testimonials[this.currentTestimonialIndex];
  }

  // Hilfsfunktion, um die Initialen aus dem Namen zu extrahieren
  getInitials(name: string): string {
    return name
      .split(' ')
      .map((part) => part.charAt(0))
      .join('')
      .toUpperCase();
  }
}
