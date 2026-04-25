import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/MovieResponse';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
  standalone: false,
})
export class SlideshowPosterComponent implements OnInit {

  @Input() movies: Movie[] = [];

  constructor() { }

  ngOnInit() { }

}
