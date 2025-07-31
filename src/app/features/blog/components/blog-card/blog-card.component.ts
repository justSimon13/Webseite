import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-blog-card',
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-card.component.html',
})
export class BlogCardComponent {
  @Input() post: any | undefined;

  getImageUrl(url: string): string {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    return environment.strapiUrl + url;
  }
}
