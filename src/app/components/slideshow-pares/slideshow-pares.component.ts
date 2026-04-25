import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from 'src/app/interfaces/MovieResponse';

@Component({
  selector: 'app-slideshow-pares',
  templateUrl: './slideshow-pares.component.html',
  styleUrls: ['./slideshow-pares.component.scss'],
  standalone: false,
})
export class SlideshowParesComponent  implements OnInit {

  @Input() movies: Movie[] = [];
  @Output() loadMore = new EventEmitter();
  
  constructor() { }

  ngOnInit() {}

  onClick() {
    console.log('Button clicked!');
    this.loadMore.emit();
  }

}
