import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  
  constructor(private http: HttpClient) {}

  getFeature() {
    return this.http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=YOUR_API_KEY');
  }
}
