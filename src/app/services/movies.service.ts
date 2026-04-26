import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { QueryParams } from '../interfaces';
import { MovieResponse } from '../interfaces/MovieResponse';
import { MovieDetail } from '../interfaces/MovieDetail';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {

  private apiKey = environment.apiKey;
  private urlApi = environment.urlApi;
  private popularPage = 0;
  private language = 'en';

  constructor(private http: HttpClient) { }

  private executeQuery<T>(endpoint: string, params: QueryParams = {}): Observable<T> {
    console.log('Petición HTTP realizada');
    return this.http.get<T>(`${this.urlApi}${endpoint}`, {
      params: {
        api_key: this.apiKey,
        ...params,
      }
    })
  }

  getFeature(): Observable<MovieResponse> {

    const today = new Date();
    const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    const month = today.getMonth() + 1;

    let mesString;

    if (month < 10) {
      mesString = '0' + month;
    } else {
      mesString = month.toString();
    }

    const startDate = `${today.getFullYear()}-${mesString}-01`;
    const endDate = `${today.getFullYear()}-${mesString}-${lastDay}`;


    return this.executeQuery<MovieResponse>('/discover/movie', {
      'primary_release_date.gte': startDate,
      'primary_release_date.lte': endDate,
      language: this.language,
      include_image_language: this.language
    });
  }

  getPopular(): Observable<MovieResponse> {
    this.popularPage++;
    return this.executeQuery<MovieResponse>('/discover/movie', {
      sort_by: 'popularity.desc',
      page: this.popularPage,
      language: this.language,
      include_image_language: this.language
    });
  }

  getMovieDetails(id: number): Observable<MovieDetail> {
    return this.executeQuery<MovieDetail>(`/movie/${id}`, {
      language: this.language,
      include_image_language: this.language
    });
  }

  getActors(id: number): Observable<any> {
    return this.executeQuery(`/movie/${id}/credits`);
  }

  searchMovie(searchText: string): Observable<MovieResponse> {
    return this.executeQuery<MovieResponse>('/search/movie', {
      query: searchText,
      language: this.language,
      include_image_language: this.language

    });
  }
}
