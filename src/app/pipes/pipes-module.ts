import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenPipe } from './imagen-pipe';
import { ParesPipe } from './pares-pipe';
import { FiltroImagePipe } from './filtro-image-pipe';
import { FiltroImageMoviePipe } from './filtro-image-movie-pipe';



@NgModule({
  declarations: [
    ImagenPipe, ParesPipe, FiltroImagePipe, FiltroImageMoviePipe
  ],
  exports: [
    ImagenPipe, ParesPipe, FiltroImagePipe, FiltroImageMoviePipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
