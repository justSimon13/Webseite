import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ScrollAnimationService } from '../../../core/services/scroll-animation/scroll-animation.service';
// import { TestimonialsMiniComponent } from '../testimonials-mini/testimonials-mini.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    // TestimonialsMiniComponent
  ],
  templateUrl: './contact-site.component.html',
})
export class ContactSiteComponent {
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
    }, 100);
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

      this.http.post('http://localhost:3000/contact', formData).subscribe({
        next: (response) => {
          console.log('Message sent successfully', response);
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
