import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StrapiService {
  private strapiUrl = environment.strapiUrl;

  private defaultPopulateFields = ['author', 'coverImage', 'categories', 'tags', 'seo'];

  constructor(private http: HttpClient) {}

  getContentType(contentType: string): Observable<any> {
    let params = new HttpParams();
    this.defaultPopulateFields.forEach((field) => {
      params = params.append(`populate[${field}]`, 'true');
    });

    return this.http.get(`${this.strapiUrl}/api/${contentType}`, { params });
  }

  getSingleItem(contentType: string, id: string): Observable<any> {
    let params = new HttpParams();
    this.defaultPopulateFields
      .filter((field) => field !== 'seo')
      .forEach((field) => {
        params = params.append(`populate[${field}]`, 'true');
      });

    params = params.append('populate[seo][populate]', 'ogImage');

    return this.http.get(`${this.strapiUrl}/api/${contentType}/${id}`, { params });
  }

  getFeaturedPosts(limit: number = 3): Observable<any> {
    let params = new HttpParams()
      .set('filters[featured][$eq]', 'true')
      .set('pagination[limit]', limit.toString())
      .set('sort[0]', 'publishedAt:desc');

    this.defaultPopulateFields.forEach((field) => {
      params = params.append(`populate[${field}]`, 'true');
    });

    return this.http.get(`${this.strapiUrl}/api/beitrags`, { params });
  }
}
