import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StrapiService {
  private strapiUrl = environment.strapiUrl;

  constructor(private http: HttpClient) {}

  getContentType(contentType: string): Observable<any> {
    return this.http.get(
      `${this.strapiUrl}/api/${contentType}?populate[author]=true&populate[seo]=true&populate[coverImage]=true&populate[categories]=true&populate[tags]=true`
    );
  }

  getSingleItem(contentType: string, id: string): Observable<any> {
    return this.http.get(
      `${this.strapiUrl}/api/${contentType}/${id}?populate[author]=true&populate[seo]=true&populate[coverImage]=true&populate[categories]=true&populate[tags]=true`
    );
  }
}
