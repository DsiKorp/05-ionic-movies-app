import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movie, MovieResponse } from '../interfaces/MovieResponse';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page implements OnInit {

  recentMovies: Movie[] = [];
  popularMovies: Movie[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getFeature().subscribe((data: MovieResponse) => {
     // console.log(data);
      this.recentMovies = data.results;
    });

      this.getPopulars();
  }

  onLoadMore() {
    this.getPopulars();
  }

  getPopulars() {
    this.moviesService.getPopular().subscribe((resp: MovieResponse) => {
      //console.log({resp});
      const tempMovies = [...this.popularMovies, ...resp.results];
      this.popularMovies = tempMovies;
    });
  }

}
