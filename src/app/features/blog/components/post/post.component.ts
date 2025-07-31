import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';

import { environment } from '../../../../../environments/environment';
import { RenderService } from '../../../../core/services/render/render.service';
import { StrapiService } from '../../../../core/services/strapi/strapi-service.service';

@Component({
  selector: 'app-post',
  imports: [CommonModule, RouterModule, MarkdownModule],
  templateUrl: './post.component.html',
})
export class PostComponent implements OnInit, OnDestroy {
  post: any;
  processedContent: string = '';

  constructor(
    private route: ActivatedRoute,
    private strapiService: StrapiService,
    private renderService: RenderService
  ) {
    this.renderService.initScrollAnimation();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const documentId = params.get('documentId');
      if (documentId) {
        this.strapiService.getSingleItem('beitrags', documentId).subscribe((data: any) => {
          this.post = data.data;

          if (this.post && this.post.content) {
            this.processedContent = this.demoteHeadings(this.post.content);
          }
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
