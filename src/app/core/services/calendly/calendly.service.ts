import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalendlyService {
  private readonly baseUrl: string = 'https://calendly.com/simonfischer-info/30min';
  private readonly defaultParams: string =
    'background_color=12141d&text_color=ffffff&primary_color=4fc3f7';
  private scriptLoaded = false;

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
