import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Movie } from 'src/app/interfaces/MovieResponse';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-slideshow-pares',
  templateUrl: './slideshow-pares.component.html',
  styleUrls: ['./slideshow-pares.component.scss'],
  standalone: false,
})
export class SlideshowParesComponent implements OnInit {

  @Input() movies: Movie[] = [];
  @Output() loadMore = new EventEmitter();

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() { }

  onClick() {
    console.log('Button clicked!');
    this.loadMore.emit();
  }

  async showDetail(id: number) {
    //console.log(id);

    const modal = await this.modalCtrl.create({
      component: DetailComponent,
      componentProps: {
        id
      }
    });

    modal.present();
  }

}
