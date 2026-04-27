import { Component } from '@angular/core';
import { Genre, MovieDetail } from '../interfaces/MovieDetail';
import { DataLocalService } from '../services/data-local-service';
import { MoviesService } from '../services/movies.service';
import { MoviesByGenre } from '../interfaces/MoviesByGenre';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {

  movies: MovieDetail[] = [];
  genres: Genre[] = [];
  favoritesByGenre: MoviesByGenre[] = [];

  constructor(
    private dataLocalService: DataLocalService,
    private moviesService: MoviesService
  ) {}

  async ionViewWillEnter() {
        this.movies = await this.dataLocalService.loadFavorites();
    this.genres = await this.moviesService.loadGenres();
    console.log(this.movies);
    console.log(this.genres);

    this.favoritesByGenre = this.moviesByGenre(this.genres, this.movies);
    console.log(this.favoritesByGenre);
  }

  moviesByGenre(genres: Genre[], movies: MovieDetail[]): MoviesByGenre[] {
    this.favoritesByGenre = [];

    return genres.map(genre => ({
      genre: genre.name,
      movies: movies.filter(movie => movie.genres.some(g => g.id === genre.id))
    }));
  }

  onModalClosed() {
    this.ionViewWillEnter();
  }
}
