import { Routes } from '@angular/router';
import { MovieComponent } from './components/movie/movie.component';
import { MoviesPopularComponent } from './components/movies-popular/movies-popular.component';
import { PersonComponent } from './components/person/person.component';

export const routes: Routes = [
  { path: 'movie/popular/:page', component: MoviesPopularComponent },
  { path: 'movie/popular', redirectTo: 'movie/popular/1' },
  { path: 'movie/:movieId', component: MovieComponent },
  { path: 'person/:personId', component: PersonComponent },
  { path: '**', redirectTo: 'movie/popular/1' },
];
