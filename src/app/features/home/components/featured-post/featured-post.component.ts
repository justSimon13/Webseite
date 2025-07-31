import { CommonModule } from '@angular/common';
import { afterNextRender, Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Subject } from 'rxjs';

import { RenderService } from '../../../../core/services/render/render.service';
import { StrapiService } from '../../../../core/services/strapi/strapi-service.service';
import { BlogCardComponent } from '../../../blog/components/blog-card/blog-card.component';

@Component({
  selector: 'app-featured-post',
  imports: [BlogCardComponent, CommonModule, RouterModule],
  templateUrl: './featured-post.component.html',
})
export class FeaturedPostComponent implements OnDestroy, OnInit {
  private postsRendered$ = new Subject<void>();

  featuredPosts: any[] = Array(3).fill(undefined);

  constructor(
    private renderService: RenderService,
    private strapiService: StrapiService
  ) {
    afterNextRender(() => {
      this.renderService.reinitScrollObserver();
    });

    this.postsRendered$.subscribe(() => {
      this.renderService.reinitScrollObserver();
    });
  }

  ngOnInit(): void {
    this.strapiService.getFeaturedPosts().subscribe((response) => {
      this.featuredPosts = response.data;
      setTimeout(() => {
        this.postsRendered$.next();
      }, 100);
    });
  }

  ngOnDestroy(): void {
    this.postsRendered$.complete();
    this.renderService.destroyScrollAnimation();
  }
}
