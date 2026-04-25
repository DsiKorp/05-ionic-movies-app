import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Movie } from 'src/app/interfaces/MovieResponse';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
  standalone: false,
})
export class SlideshowPosterComponent implements OnInit {

  @Input() movies: Movie[] = [];

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() { }

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
