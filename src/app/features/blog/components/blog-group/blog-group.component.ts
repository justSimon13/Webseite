import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { BlogCardComponent } from '../blog-card/blog-card.component';

@Component({
  selector: 'app-blog-group',
  standalone: true,
  imports: [CommonModule, BlogCardComponent],
  templateUrl: './blog-group.component.html',
})
export class BlogGroupComponent {
  @Input() groupName: string = '';
  @Input() posts: any[] = [];
}
