import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Subject } from 'rxjs';

import { RenderService } from '../../../core/services/render/render.service';
import { SeoService } from '../../../core/services/seo/seo.service';
import { StrapiService } from '../../../core/services/strapi/strapi-service.service';
import { BlogGroupComponent } from '../components/blog-group/blog-group.component';

@Component({
  selector: 'app-site-blog',
  imports: [CommonModule, RouterModule, BlogGroupComponent],
  templateUrl: './blog-site.component.html',
})
export class BlogSiteComponent implements OnInit, OnDestroy {
  groupedPosts: { categoryName: string; posts: any[] }[] = [
    { categoryName: 'Featured', posts: Array(2).fill(undefined) },
    { categoryName: '...', posts: Array(3).fill(undefined) },
  ];

  private postsRendered$ = new Subject<void>();

  constructor(
    private strapiService: StrapiService,
    private renderService: RenderService,
    private seoService: SeoService
  ) {
    this.postsRendered$.subscribe(() => {
      this.renderService.reinitScrollObserver();
    });
  }

  ngOnInit(): void {
    this.seoService.updateMeta(
      'Code & Coffee: Ein Blog für moderne Softwareentwickler',
      'Bleib auf dem Laufenden! Unser Blog versorgt dich regelmäßig mit den neuesten Trends und Anleitungen aus der Welt der Webentwicklung. Für Entwickler, von Entwicklern.',
      '/blog'
    );

    this.strapiService.getContentType('beitrags').subscribe({
      next: (response) => {
        const allPosts = response.data;
        if (!allPosts || allPosts.length === 0) {
          this.groupedPosts = [];
          return;
        }

        const featuredPosts = allPosts.filter((post: any) => post.featured === true);
        const otherPosts = allPosts.filter((post: any) => !post.featured);

        const categoryGroups = this.groupPostsByCategory(otherPosts);
        const finalGroups = [];

        if (featuredPosts.length > 0) {
          finalGroups.push({ categoryName: 'Aktuelles', posts: featuredPosts });
        }

        this.groupedPosts = [...finalGroups, ...categoryGroups];

        setTimeout(() => {
          this.postsRendered$.next();
        }, 100);
      },
      error: (err) => {
        console.error(err);
        this.groupedPosts = [];
      },
    });
  }

  private groupPostsByCategory(posts: any[]): { categoryName: string; posts: any[] }[] {
    const groups: Record<string, any[]> = {};

    posts.forEach((post) => {
      post.categories?.forEach((category: any) => {
        if (!groups[category.name]) {
          groups[category.name] = [];
        }
        groups[category.name].push(post);
      });
    });

    return Object.keys(groups).map((categoryName) => ({
      categoryName,
      posts: groups[categoryName],
    }));
  }

  ngOnDestroy(): void {
    this.postsRendered$.complete();
    this.renderService.destroyScrollAnimation();
  }
}
