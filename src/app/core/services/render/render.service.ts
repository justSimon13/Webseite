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

  /**
   * Prüft, ob die Anwendung im Browser läuft
   */
  isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  /**
   * Initialisiert die Scroll-Animation nach dem nächsten Render
   * @param timeout Optional: Verzögerung in Millisekunden (Standard: 100)
   */
  initScrollAnimation(timeout: number = this.defaultTimeout): void {
    if (!this.isBrowser()) return;

    afterNextRender(() => {
      setTimeout(() => {
        this.scrollAnimationService.initScrollObserver();
      }, timeout);
    });
  }

  /**
   * Destroys the scroll animation
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
