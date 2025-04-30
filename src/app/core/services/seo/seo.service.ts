import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  constructor(
    private title: Title,
    private meta: Meta
  ) {}

  updateMeta(titleText: string, description: string) {
    this.title.setTitle(titleText);

    this.meta.updateTag({ name: 'description', content: description });

    this.meta.updateTag({ property: 'og:title', content: titleText });
    this.meta.updateTag({ property: 'og:description', content: description });

    this.meta.updateTag({ name: 'twitter:title', content: titleText });
    this.meta.updateTag({ name: 'twitter:description', content: description });
  }
}
