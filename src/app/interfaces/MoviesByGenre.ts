import { MovieDetail } from "./MovieDetail";

export interface MoviesByGenre {
    genre: string;
    movies: MovieDetail[];
}