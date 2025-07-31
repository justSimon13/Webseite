import { HttpClient } from '@angular/common/http';
import { afterNextRender, Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { environment } from '../../../../environments/environment';
import { RenderService } from '../../../core/services/render/render.service';
import { SchemaService } from '../../../core/services/schema/schema.service';
import { SeoService } from '../../../core/services/seo/seo.service';
import { CONTACT_IMPORTS } from '../contact-shared';

@Component({
  selector: 'app-contact-site',
  imports: [CONTACT_IMPORTS],
  templateUrl: './contact-site.component.html',
})
export class ContactSiteComponent implements OnInit, OnDestroy {
  name = '';
  email = '';
  subject = '';
  message = '';
  contactCode = '';
  privacy = false;
  sending = false;
  sendSuccess = false;
  sendError = false;

  constructor(
    private http: HttpClient,
    private seoService: SeoService,
    private renderService: RenderService,
    private schemaService: SchemaService
  ) {
    afterNextRender(() => {
      this.renderService.reinitScrollObserver();
    });
  }

  ngOnInit(): void {
    this.seoService.updateMeta(
      'Kontakt – Simon Fischer | Jetzt Projekt anfragen oder unverbindlich beraten lassen',
      'Du hast Fragen oder möchtest ein Projekt starten? Hier erreichst du Simon Fischer – für individuelle Webseiten, Onlineshops oder Softwarelösungen. Schnell & unkompliziert.'
    );

    this.schemaService.clearSchemas();
  }

  ngOnDestroy(): void {
    this.renderService.destroyScrollAnimation();
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
