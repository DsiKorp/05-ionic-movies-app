import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { QueryParams } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {

  private apiKey = environment.apiKey;
  private urlApi = environment.urlApi;
  
  constructor(private http: HttpClient) {}

  private executeQuery<T>(endpoint: string, params: QueryParams = {}): Observable<T> {
    console.log('Petición HTTP realizada');
    return this.http.get<T>(`${this.urlApi}${endpoint}`, {
      params: {
        api_key: this.apiKey,
        ...params,
      }
    })
  }

  getFeature() {
    return this.executeQuery('/discover/movie', {
      'primary_release_date.gte': '2014-09-15',
      'primary_release_date.lte': '2014-10-22',
      language: 'en',
      include_image_language: 'en'
    });
  }
}

