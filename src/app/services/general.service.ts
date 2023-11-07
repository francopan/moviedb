import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom, forkJoin, map } from 'rxjs';
import { SearchResult } from '../models/search-result.model';
import { MovieService } from './movie.service';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {

  private _movieService = inject(MovieService);

  public search(term: string): Promise<Array<SearchResult>> {
    return firstValueFrom(
      forkJoin([this._movieService.searchMovie(term)]).pipe(
        map((v) => {
          const movies = v[0].results.map((v) => {
            return { type: 'movie', value: v } as SearchResult;
          });
          const person = [] as SearchResult[];
          return [...movies, ...person] as Array<SearchResult>;
        })
      )
    );
  }

  public navigateToMovie(router: Router, movieId: string): void {
    router.navigate([`/movie/${movieId}`]);
  }

  public navigateToPerson(router: Router, personId: string): void {
    router.navigate([`/person/${personId}`]);
  }

  public navigateToPopularMovies(router: Router, page = 1): void {
    router.navigate([`/movie/popular/${page}`]);
  }
}
