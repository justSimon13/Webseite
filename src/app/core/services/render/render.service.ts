import { isPlatformBrowser } from '@angular/common';
import { Injectable, afterNextRender, PLATFORM_ID, inject } from '@angular/core';

import { ScrollAnimationService } from '../scroll-animation/scroll-animation.service';

@Injectable({
  providedIn: 'root',
})
export class RenderService {
  private readonly defaultTimeout = 100;
  private readonly platformId = inject(PLATFORM_ID);

  constructor(private scrollAnimationService: ScrollAnimationService) {}

  isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  /**
   * Initialisiert den Scroll-Observer neu.
   * Diese Methode wird jetzt direkt aus der Komponente aufgerufen.
   */
  reinitScrollObserver(): void {
    if (!this.isBrowser()) return;

    // Zerstöre einen eventuell alten Observer, um Speicherlecks zu vermeiden
    this.scrollAnimationService.destroyScrollObserver();
    // Initialisiere den Observer neu
    this.scrollAnimationService.initScrollObserver();
  }

  /**
   * Zerstört den Scroll-Observer.
   */
  destroyScrollAnimation(): void {
    if (!this.isBrowser()) return;
    this.scrollAnimationService.destroyScrollObserver();
  }

  /**
   * Führt eine Funktion nach dem nächsten Render aus
   * @param callback Die auszuführende Funktion
   * @param timeout Optional: Verzögerung in Millisekunden (Standard: 100)
   */
  executeAfterRender(callback: () => void, timeout: number = this.defaultTimeout): void {
    if (!this.isBrowser()) return;

    afterNextRender(() => {
      setTimeout(() => {
        callback();
      }, timeout);
    });
  }
}
