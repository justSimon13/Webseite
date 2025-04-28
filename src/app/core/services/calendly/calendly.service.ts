import { Injectable } from '@angular/core';

declare const Calendly: any;

@Injectable({
  providedIn: 'root',
})
export class CalendlyService {
  private baseUrl: string = 'https://calendly.com/simonfischer-info/30min';
  private defaultParams: string =
    'background_color=12141d&text_color=ffffff&primary_color=4fc3f7';

  constructor() {}

  openCalendly(param: string = ''): void {
    const url = `${this.baseUrl}?${this.defaultParams}${
      param ? '&' + param : ''
    }`;

    Calendly.initPopupWidget({ url });
  }
}
