import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { api_url } from 'src/app/constants/api_url.constant';
import { MovieImage } from 'src/app/models/movie-image.model';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-poster',
  templateUrl: './movie-poster.component.html',
  styleUrls: ['./movie-poster.component.scss'],
})
export class MoviePosterComponent implements OnInit {
  @Input() movie: Movie | undefined;
  @Input() preview: boolean = false;
  @Output() clicked = new EventEmitter<Movie>();

  public poster: MovieImage | undefined;
  public loading: boolean = true;

  private defaultWidth = '300';
  private defaultHeight = 'auto';

  constructor(private movieService: MovieService) {}

  @Input() set width(w: number) {
    this.defaultWidth = w.toString();
  }

  @Input() set height(h: number) {
    this.defaultHeight = h.toString();
  }

  public ngOnInit(): void {
    this.getMoviePoster();
  }

  public onClick(): void {
    if (this.movie) {
      this.clicked.next(this.movie);
    }
  }

  public getWidth(original = false): string {
    if (this.poster && !this.loading && original) {
      return this.poster.width.toString();
    }
    return this.defaultWidth;
  }

  public getHeight(original = false): string {
    if (this.poster && !this.loading) {
      return original ? this.poster.height.toString() : this.defaultHeight;
    }
    return this.defaultHeight;
  }

  public getImageUrl(): string {
    const widthNum = Number.parseInt(this.getWidth());
    const widthParam = widthNum < 300 ? 300 : widthNum;

    if (this.poster && !this.loading) {
      return `${api_url.image}/w${widthParam}${this.poster.file_path}`;
    }
    if (this.movie?.poster_path) {
      return `${api_url.image}/w${widthParam}${this.movie.poster_path}`;
    }
    return '';
  }

  private getMoviePoster() {
    if (this.movie?.poster_path) {
      this.loading = false;
      return;
    }
    if (this.movie?.id) {
      this.movieService.getImages(this.movie.id).subscribe((res) => {
        const posters = res.posters || [];
        if (posters.length > 0) {
          posters.sort(this.sortByRating());
          this.poster = posters[0];
        }
        this.loading = false;
      });
    }
  }

  private sortByRating(): (a: MovieImage, b: MovieImage) => number {
    return (a: MovieImage, b: MovieImage) => a.vote_count - b.vote_count;
  }
}
