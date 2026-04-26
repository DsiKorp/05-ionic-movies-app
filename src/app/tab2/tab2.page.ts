import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../interfaces/MovieResponse';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  searchText: string = '';
  movies: Movie[] = [];
  ideas: string[] = ['Spiderman', 'Batman', 'Superman', 'Ironman', 'Capitan America', 'Thor', 'Hulk', 'Black Widow', 'Doctor Strange'];
  showSpinner: boolean = false;

  constructor(private moviesService: MoviesService) { }

  searchMovie(event: any) {
    this.showSpinner = true;
    // Si viene de ion-searchbar (CustomEvent)
    if (event.detail && event.detail.value !== undefined) {
      this.searchText = event.detail.value;
    }
    // Si viene de click en ion-item
    else if ((event.target as HTMLElement).textContent) {
      this.searchText = (event.target as HTMLElement).textContent?.trim() || '';
    }

    console.log(this.searchText);

    if (this.searchText.length === 0) {
      this.movies = [];
      this.showSpinner = false;
      return;
    }

    this.moviesService.searchMovie(this.searchText).subscribe((response) => {
      console.log(response);
      this.movies = response.results;
      this.showSpinner = false;
    });
  }

}
