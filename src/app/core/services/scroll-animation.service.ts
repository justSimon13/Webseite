// scroll-animation.service.ts
import { Injectable, NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollAnimationService {
  constructor(private ngZone: NgZone) {}

  initScrollObserver(): void {
    this.ngZone.runOutsideAngular(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        { threshold: 0.1 }
      );

      document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
        observer.observe(el);
      });
    });
  }
}
