import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, afterNextRender } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';

import { environment } from '../../../../../environments/environment';
import { RenderService } from '../../../../core/services/render/render.service';
import { SchemaService } from '../../../../core/services/schema/schema.service';
import { SeoService } from '../../../../core/services/seo/seo.service';
import { StrapiService } from '../../../../core/services/strapi/strapi-service.service';

@Component({
  selector: 'app-post',
  imports: [CommonModule, RouterModule, MarkdownModule],
  templateUrl: './post.component.html',
})
export class PostComponent implements OnInit, OnDestroy {
  post: any | undefined | null;
  processedContent: string = '';

  constructor(
    private route: ActivatedRoute,
    private strapiService: StrapiService,
    private renderService: RenderService,
    private seoService: SeoService,
    private schemaService: SchemaService
  ) {
    afterNextRender(() => {
      this.renderService.reinitScrollObserver();
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const documentId = params.get('documentId');
      if (documentId) {
        this.strapiService.getSingleItem('beitrags', documentId).subscribe({
          next: (data: any) => {
            this.post = data.data;

            if (this.post?.content) {
              this.processedContent = this.demoteHeadings(this.post.content);
            }

            if (this.post?.seo) {
              const postUrl = `/blog/${this.post.documentId}`;
              const imageUrl = this.getImageUrl(this.post.seo?.ogImage?.formats?.large?.url);

              this.seoService.updateMeta(
                this.post.seo.metaTitle,
                this.post.seo.metaDescription,
                postUrl,
                imageUrl,
                'article'
              );

              this.schemaService.clearSchemas();
              this.schemaService.addBlogPostingSchema(this.post);
            }
          },
          error: (err) => {
            console.error('Fehler beim Laden des Beitrags:', err);
            this.post = null;
          },
        });
      }
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

  demoteHeadings(markdown: string): string {
    const headingRegex = /^(#+ )/gm;
    return markdown.replace(headingRegex, '#$1');
  }
}
