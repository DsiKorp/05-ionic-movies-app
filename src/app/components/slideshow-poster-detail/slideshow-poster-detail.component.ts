import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MovieDetail } from 'src/app/interfaces/MovieDetail';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-slideshow-poster-detail',
  templateUrl: './slideshow-poster-detail.component.html',
  styleUrls: ['./slideshow-poster-detail.component.scss'],
  standalone: false,
})
export class SlideshowPosterDetailComponent implements OnInit {

  @Input() movies: MovieDetail[] = [];
  @Output() modalClosed = new EventEmitter<void>();

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() { }

  async showDetail(id: number) {
    const modal = await this.modalCtrl.create({
      component: DetailComponent,
      componentProps: {
        id
      }
    });

    modal.present();
  }

}
