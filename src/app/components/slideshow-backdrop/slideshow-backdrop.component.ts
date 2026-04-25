import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Movie } from 'src/app/interfaces/MovieResponse';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
  standalone: false,
})
export class SlideshowBackdropComponent  implements OnInit {

  @Input() movies: Movie[] = [];

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

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
