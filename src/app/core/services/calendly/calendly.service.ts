import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalendlyService {
  private readonly baseUrl: string = 'https://calendly.com/simonfischer-info/30min';
  private readonly defaultParams: string =
    'background_color=12141d&text_color=ffffff&primary_color=4fc3f7';
  private scriptLoaded = false;

  /**
   * Lädt das Calendly-Script dynamisch
   *
   * Das Script wird nur einmal geladen und bei nachfolgenden Aufrufen wiederverwendet.
   * @returns Promise, das aufgelöst wird, wenn das Script geladen ist
   * @throws Error wenn das Script nicht geladen werden kann
   */
  private loadScript(): Promise<void> {
    return new Promise((resolve, reject) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (this.scriptLoaded || (window as any).Calendly) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = () => {
        this.scriptLoaded = true;
        resolve();
      };
      script.onerror = () => reject(new Error('Calendly script failed to load.'));
      document.body.appendChild(script);
    });
  }

  /**
   * Öffnet das Calendly-Buchungswidget
   *
   * Lädt das Calendly-Script falls noch nicht geschehen und öffnet das Widget
   * mit den angegebenen Parametern. Die Parameter können verwendet werden, um
   * verschiedene Angebotspakete zu kennzeichnen.
   *
   * @param param Optional: Zusätzliche URL-Parameter für die Buchung (z.B. 'a1=1' für ein bestimmtes Paket)
   */
  async openCalendly(param: string = ''): Promise<void> {
    const url = `${this.baseUrl}?${this.defaultParams}${param ? '&' + param : ''}`;

    try {
      await this.loadScript();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).Calendly.initPopupWidget({ url });
    } catch (error) {
      console.error('Calendly konnte nicht geladen werden:', error);
    }
  }
}
