// Notwendige Imports hinzufügen oder anpassen
import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Subject } from 'rxjs'; // 👈 WICHTIG: Subject importieren

import { environment } from '../../../../environments/environment';
import { RenderService } from '../../../core/services/render/render.service';
import { StrapiService } from '../../../core/services/strapi/strapi-service.service';

@Component({
  selector: 'app-site-blog',
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-site.component.html',
})
export class BlogSiteComponent implements OnInit, OnDestroy {
  posts: any = [];

  // 1. Subject erstellen, das als Signalgeber dient.
  private postsRendered$ = new Subject<void>();

  constructor(
    private strapiService: StrapiService,
    private renderService: RenderService
  ) {
    this.postsRendered$.subscribe(() => {
      this.renderService.reinitScrollObserver();
    });
  }

  ngOnInit(): void {
    this.strapiService.getContentType('beitrags').subscribe((data: any) => {
      this.posts = data;
      setTimeout(() => {
        this.postsRendered$.next();
      }, 100);
    });
  }

  ngOnDestroy(): void {
    // Es ist gute Praxis, auch Subjects zu schließen, um Speicherlecks zu vermeiden.
    this.postsRendered$.complete();
    this.renderService.destroyScrollAnimation();
  }

  getImageUrl(url: string): string {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    return environment.strapiUrl + url;
  }
}
