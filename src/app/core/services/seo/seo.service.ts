import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

import { environment } from '../../../../environments/environment';
import { RenderService } from '../render/render.service';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private readonly baseUrl = environment.baseUrl;

  constructor(
    private title: Title,
    private meta: Meta,
    private renderService: RenderService
  ) {}

  /**
   * Aktualisiert alle relevanten Meta-Tags für eine Seite
   * @param titleText Der Titel der Seite
   * @param description Die Beschreibung der Seite
   * @param path Der Pfad der Seite (optional, für canonical URL)
   * @param imageUrl Die URL des Vorschaubildes (optional)
   */
  updateMeta(
    titleText: string,
    description: string,
    path: string = '',
    imageUrl: string = 'assets/og-image.jpg',
    ogType: 'website' | 'article' = 'website'
  ): void {
    this.title.setTitle(titleText);
    this.meta.updateTag({ name: 'description', content: description });

    const fullImageUrl = imageUrl.startsWith('http')
      ? imageUrl
      : `${this.baseUrl}/${imageUrl.startsWith('/') ? imageUrl.substring(1) : imageUrl}`;

    // Open Graph Tags
    this.meta.updateTag({ property: 'og:title', content: titleText });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:url', content: `${this.baseUrl}${path}` });
    this.meta.updateTag({ property: 'og:image', content: fullImageUrl });
    this.meta.updateTag({ property: 'og:type', content: ogType });

    // Twitter Tags
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: titleText });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: `${this.baseUrl}/${imageUrl}` });

    // Canonical URL
    const canonicalUrl = `${this.baseUrl}${path}`;
    this.meta.updateTag({ property: 'og:url', content: canonicalUrl });

    // Canonical Link nur im Browser setzen
    if (this.renderService.isBrowser()) {
      const existingCanonical = document.querySelector('link[rel="canonical"]');
      if (existingCanonical) {
        existingCanonical.setAttribute('href', canonicalUrl);
      } else {
        const link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        link.setAttribute('href', canonicalUrl);
        document.head.appendChild(link);
      }
    }
  }
}
