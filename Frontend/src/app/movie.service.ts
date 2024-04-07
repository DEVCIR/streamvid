import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})

export class MovieService {
  private apiUrl = 'http://api.kaanoli.com/api/content?l=en&r=';

  constructor(private http: HttpClient) {}

  getTrending() {
    return this.http.get(`${this.apiUrl}us&f=trending`);
  }

  getTrendingbyId(id: string) {
    return this.http.get(`${this.apiUrl}us&f=trending/${id}`);
  }
  getRecommended() {
    return this.http.get(`${this.apiUrl}us&f=recommended`);
  }

  getRecommendedbyId(id: string) {
    return this.http.get(`${this.apiUrl}us&f=recommended/${id}`);
  }
}
