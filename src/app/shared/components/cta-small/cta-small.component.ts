import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cta-small',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cta-small.component.html',
  styleUrls: ['./cta-small.component.css'],
})
export class CtaSmallComponent {
  openWidget(): void {
    console.log('Opening booking widget...');
  }
}
