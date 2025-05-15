import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { environment } from '../../../../environments/environment';
import { ScrollAnimationService } from '../../../core/services/scroll-animation/scroll-animation.service';
import { SeoService } from '../../../core/services/seo/seo.service';
import { CONTACT_IMPORTS } from '../contact-shared';

@Component({
  selector: 'app-contact-site',
  imports: [CONTACT_IMPORTS],
  templateUrl: './contact-site.component.html',
})
export class ContactSiteComponent implements AfterViewInit, OnInit {
  private readonly timeout = 100;

  name: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';
  privacy: boolean = false;
  contactCode: string = '';

  sending: boolean = false;
  sendSuccess: boolean = false;
  sendError: boolean = false;

  constructor(
    private seoService: SeoService,
    private scrollAnimationService: ScrollAnimationService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.seoService.updateMeta(
      'Kontakt – Simon Fischer | Jetzt Projekt anfragen oder unverbindlich beraten lassen',
      'Du hast Fragen oder möchtest ein Projekt starten? Hier erreichst du Simon Fischer – für individuelle Webseiten, Onlineshops oder Softwarelösungen. Schnell & unkompliziert.'
    );
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.scrollAnimationService.initScrollObserver();
    }, this.timeout);
  }

  onSubmit(form: NgForm): void {
    if (this.contactCode?.trim()) {
      console.warn('Honeypot ausgefüllt – Spamverdacht, Anfrage abgebrochen.');
      return;
    }

    if (form.valid) {
      this.sending = true;
      this.sendSuccess = false;
      this.sendError = false;

      const formData = {
        name: this.name,
        email: this.email,
        subject: this.subject,
        message: this.message,
        contactCode: this.contactCode,
      };

      this.http.post(`${environment.apiUrl}/contact`, formData).subscribe({
        next: () => {
          this.sendSuccess = true;
          form.resetForm();
        },
        error: (error) => {
          console.error('Fehler beim Senden der Nachricht:', error);
          this.sendError = true;
        },
        complete: () => {
          this.sending = false;
        },
      });
    }
  }
}
