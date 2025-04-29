import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { environment } from '../../../../environments/environment';
import { ScrollAnimationService } from '../../../core/services/scroll-animation/scroll-animation.service';
import { CONTACT_IMPORTS } from '../contact-shared';

@Component({
  selector: 'app-contact-site',
  imports: [CONTACT_IMPORTS],
  templateUrl: './contact-site.component.html',
})
export class ContactSiteComponent implements AfterViewInit {
  private readonly timeout = 100;

  name: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';
  privacy: boolean = false;

  sending: boolean = false;
  sendSuccess: boolean = false;
  sendError: boolean = false;

  constructor(
    private scrollAnimationService: ScrollAnimationService,
    private http: HttpClient
  ) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.scrollAnimationService.initScrollObserver();
    }, this.timeout);
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.sending = true;
      this.sendSuccess = false;
      this.sendError = false;

      const formData = {
        name: this.name,
        email: this.email,
        subject: this.subject,
        message: this.message,
      };

      this.http.post(`${environment.apiUrl}/contact`, formData).subscribe({
        next: () => {
          this.sendSuccess = true;
          form.resetForm();
        },
        error: (error) => {
          console.error('Error sending message', error);
          this.sendError = true;
        },
        complete: () => {
          this.sending = false;
        },
      });
    }
  }
}
