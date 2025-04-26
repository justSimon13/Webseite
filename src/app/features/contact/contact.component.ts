import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';

  onSubmit(form: NgForm): void {
    if (form.valid) {
      console.log('Form submitted successfully', {
        name: this.name,
        email: this.email,
        subject: this.subject,
        message: this.message,
      });

      // Here you would typically call a service to send the form data
      // this.contactService.sendMessage(this.name, this.email, this.subject, this.message)
      //   .subscribe(response => {
      //     console.log('Message sent!', response);
      //     this.resetForm(form);
      //   });

      // For now, just reset the form
      this.resetForm(form);

      // You could also show a success message
      alert(
        'Vielen Dank für deine Nachricht! Ich werde mich in Kürze bei dir melden.'
      );
    } else {
      console.log('Form is invalid');
    }
  }

  resetForm(form: NgForm): void {
    form.resetForm();
    this.name = '';
    this.email = '';
    this.subject = '';
    this.message = '';
  }
}
