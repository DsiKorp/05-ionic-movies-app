import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { PipesModule } from '../pipes/pipes-module';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';
import { GridComponent } from './grid/grid.component';
import { SlideshowParesComponent } from './slideshow-pares/slideshow-pares.component';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [
    DetailComponent,
    GridComponent,
    HeaderComponent,
    SlideshowBackdropComponent,
    SlideshowParesComponent,
    SlideshowPosterComponent,
  ],
  exports: [
    DetailComponent,
    GridComponent,
    HeaderComponent,
    SlideshowBackdropComponent,
    SlideshowParesComponent,
    SlideshowPosterComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
