import { Injectable, NgZone } from '@angular/core';

import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ScrollAnimationService {
  private observer: IntersectionObserver | null = null;
  private readonly threshold = 0.1;

  constructor(private ngZone: NgZone) {}

  /**
   * Gibt eine Nachricht nur im Development-Modus in der Konsole aus
   * @param message Die auszugebende Nachricht
   */
  private log(message: string): void {
    if (!environment.production) {
      // eslint-disable-next-line no-console
      console.log(`[ScrollAnimationService] ${message}`);
    }
  }

  /**
   * Initialisiert den IntersectionObserver für Scroll-Animationen
   *
   * Der Observer wird außerhalb der Angular-Zone ausgeführt, um die Performance
   * zu optimieren. Er beobachtet alle Elemente mit der Klasse 'reveal-on-scroll'
   * und fügt ihnen die Klasse 'visible' hinzu, wenn sie sichtbar werden.
   */
  initScrollObserver(): void {
    if (this.observer) return;

    this.ngZone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        { threshold: this.threshold }
      );

      if (this.observer) {
        document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
          this.observer!.observe(el);
        });

        this.log('Observer init');
      }
    });
  }

  /**
   * Beendet den IntersectionObserver und entfernt alle Beobachtungen
   *
   * Diese Methode sollte aufgerufen werden, wenn die Komponente zerstört wird,
   * um Memory-Leaks zu vermeiden.
   */
  destroyScrollObserver(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;

      this.log('Observer destroyed');
    }
  }
}
