import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../interfaces/MovieResponse';

@Pipe({
  name: 'filtroImageMovie',
  standalone: false
})
export class FiltroImageMoviePipe implements PipeTransform {

  transform(movies: Movie[]): Movie[] {
    return movies.filter(movie => movie.backdrop_path !== null);
  }

}
