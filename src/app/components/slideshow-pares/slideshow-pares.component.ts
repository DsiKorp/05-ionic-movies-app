import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/MovieResponse';

@Component({
  selector: 'app-slideshow-pares',
  templateUrl: './slideshow-pares.component.html',
  styleUrls: ['./slideshow-pares.component.scss'],
  standalone: false,
})
export class SlideshowParesComponent  implements OnInit {

  @Input() movies: Movie[] = [];
  
  constructor() { }

  ngOnInit() {}

  onClick() {
    console.log('Button clicked!');
  }

}
