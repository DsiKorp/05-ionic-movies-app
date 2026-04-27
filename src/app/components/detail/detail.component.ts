import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { MovieDetail } from 'src/app/interfaces/MovieDetail';
import { Actors, Cast } from 'src/app/interfaces/Actors';
import { ModalController } from '@ionic/angular';
import { DataLocalService } from 'src/app/services/data-local-service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  standalone: false
})
export class DetailComponent implements OnInit {

  @Input() id: number = 0;
  movieDetail: MovieDetail = {} as MovieDetail;
  actors: Cast[] = [];
  totalCharacters: number = 150;
  showReadMore: boolean = true;
  star: string = 'star-outline';

  constructor(
    private moviesService: MoviesService,
    private modalCtrl: ModalController,
    private dataLocalService: DataLocalService
  ) { }

  ngOnInit() {
    console.log(this.id);

    this.checkFavorite();

    this.moviesService.getMovieDetails(this.id).subscribe((movie: MovieDetail) => {
      console.log(movie);
      this.movieDetail = movie;
    });

    this.moviesService.getActors(this.id).subscribe((team: Actors) => {
      console.log(team);
      this.actors = team.cast;
    });
  }

  showDescription() {
    this.totalCharacters = this.movieDetail.overview.length;
    this.showReadMore = false;
    console.log(this.totalCharacters);
  }

  goBack() {
    this.modalCtrl.dismiss({ changed: true });
  }

  async addFavorite() {
    console.log('Poner en favoritos');
    await this.dataLocalService.saveMovie(this.movieDetail);
    this.checkFavorite();
  }

  async checkFavorite() {
    const existe = await this.dataLocalService.existMovie(this.id);
    this.star = existe ? 'star' : 'star-outline';
  }

}
