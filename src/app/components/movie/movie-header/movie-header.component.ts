import { Component, Input } from '@angular/core';
import { api_url } from 'src/app/constants/api_url.constant';
import { Genre } from 'src/app/models/genre.model';
import { Movie } from 'src/app/models/movie.model';
import { Utils } from 'src/core/utils/utils';

@Component({
  selector: 'app-movie-header',
  templateUrl: './movie-header.component.html',
  styleUrls: ['./movie-header.component.scss'],
})
export class MovieHeaderComponent {
  @Input() public movie: Movie | undefined;
  private genres: Array<Genre> | undefined;

  public getBackground(): string {
    return this.movie
      ? `${api_url.image}/original${this.movie.backdrop_path}`
      : '';
  }

  public getFormattedRunTime(min: number | null) {
    return Utils.formatRuntime(min);
  }

  public getReleaseDate(): string {
    return this.movie ? Utils.formatDate(this.movie.release_date) : '';
  }

  public getGenres(): Array<string> {
    if (!this.genres && this.movie?.genres) {
      this.genres = this.movie.genres;
    }
    return this.genres?.map((g) => g.name) || [];
  }

  public formatCurrency(value: number): string {
    return Utils.formatCurrency(value);
  }
}
