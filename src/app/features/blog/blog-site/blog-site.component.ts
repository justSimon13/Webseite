import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, Injector, runInInjectionContext } from '@angular/core';
import { RouterModule } from '@angular/router';

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

  constructor(
    private strapiService: StrapiService,
    private renderService: RenderService,
    private injector: Injector
  ) {}

  ngOnInit(): void {
    this.strapiService.getContentType('beitrags').subscribe((data: any) => {
      this.posts = data;
      runInInjectionContext(this.injector, () => {
        this.renderService.initScrollAnimation();
      });
    });
  }

  ngOnDestroy(): void {
    this.renderService.destroyScrollAnimation();
  }

  getImageUrl(url: string): string {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    return environment.strapiUrl + url;
  }
}
