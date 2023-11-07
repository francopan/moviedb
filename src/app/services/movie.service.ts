import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { api_url } from '../constants/api_url.constant';
import { MovieCredit } from '../models/movie-credit.model';
import { MovieImageResponse } from '../models/movie-image.model';
import { Movie, MoviePage } from '../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private _httpClient = inject(HttpClient);
  private readonly 'url' = `${api_url.apiv3}/movie`;

  public get(movieId: number) {
    return this._httpClient.get<Movie>(`${this.url}/${movieId}`);
  }

  public getPopular(page = 1) {
    let params = new HttpParams();
    params = params.set('page', page);
    return this._httpClient.get<MoviePage>(`${this.url}/popular`, { params });
  }

  public getImages(movieId: number) {
    return this._httpClient.get<MovieImageResponse>(
      `${this.url}/${movieId}/images`
    );
  }

  public getCredits(movieId: number) {
    return this._httpClient.get<MovieCredit>(`${this.url}/${movieId}/credits`);
  }

  public searchMovie(term: string, page = 1): Observable<MoviePage> {
    let params = new HttpParams();
    params = params.append('query', term);
    params = params.append('page', page);
    return this._httpClient.get<MoviePage>(`${api_url.apiv3}/search/movie`, { params });
  }
}
