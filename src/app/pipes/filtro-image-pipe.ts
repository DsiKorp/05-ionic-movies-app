import { Pipe, PipeTransform } from '@angular/core';
import { MovieDetail } from '../interfaces/MovieDetail';

@Pipe({
  name: 'filtroImage',
  standalone: false
})
export class FiltroImagePipe implements PipeTransform {

  transform(movies: MovieDetail[]): MovieDetail[] {
    return movies.filter(movie => movie.backdrop_path !== null);
  }

}
