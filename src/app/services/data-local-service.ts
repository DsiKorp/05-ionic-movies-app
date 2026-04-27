import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { MovieDetail } from '../interfaces/MovieDetail';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class DataLocalService {

  private _movies: MovieDetail[] = [];
  private _storage: Storage | null = null;

  constructor(
    private storage: Storage,
    private toastCtrl: ToastController
  ) {
    this.init();
    this.loadFavorites();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;

  }

  async presentToast(message: string): Promise<void> {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      position: 'top',
      color: 'primary'
    });
    toast.present();
  }

  async saveMovie(movie: MovieDetail): Promise<void> {

    let existe = this._movies.find(m => m.id === movie.id);
    let mensaje = '';

    if (existe) {
      this._movies = this._movies.filter(m => m.id !== movie.id);
      mensaje = 'Movie removed from favorites';
    } else {
      this._movies.push(movie);
      mensaje = 'Movie added to favorites';
    }

    this.storage.set('movies', this._movies);
    await this.presentToast(mensaje);

  }

  async loadFavorites(): Promise<MovieDetail[]> {
    const movies = await this.storage.get('movies');
    this._movies = movies || [];

    return this._movies;
  }

  async existMovie(id: number): Promise<boolean> {
    id = Number(id);

    await this.loadFavorites();

    // const existe = undefined
    // undefined
    // !!existe
    // false
    return !!this._movies.find(m => m.id === id);
  }
}
