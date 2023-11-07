import { AfterViewInit, Component, ViewChild, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paginator } from 'primeng/paginator';
import { Movie } from 'src/app/models/movie.model';
import { GeneralService } from 'src/app/services/general.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies-popular',
  templateUrl: './movies-popular.component.html',
  styleUrls: ['./movies-popular.component.scss'],
})
export class MoviesPopularComponent implements AfterViewInit {
  @ViewChild('paginator', { static: true }) public paginator: Paginator | undefined;
  public movies: Array<Movie> = [];
  public page = 1;
  public totalPages = 1;
  public totalResults = 1;

  private _activatedRouter = inject(ActivatedRoute);
  private _router = inject(Router);
  private _movieService = inject(MovieService);
  private _generalService = inject(GeneralService);


  public ngAfterViewInit(): void {
    this._activatedRouter.params.subscribe((res) => {
      this.page = Number.parseInt(res['page']);
      this.setPage(this.page, true);
      this.getMovies(this.page);
    });
  }

  public onClickPoster(movie: Movie): void {
    this._generalService.navigateToMovie(this._router, movie.id.toString());
  }

  public onPageChange(value: any): void {
    const page = Number.parseInt(value.page) + 1;
    this._generalService.navigateToPopularMovies(this._router, page);
  }

  private getMovies(page = 1): void {
    this._movieService.getPopular(page).subscribe((res) => {
      this.movies = res.results;
      this.totalPages = res.total_pages;
      this.totalResults = 1000;
      this.setPage(page, true);
    });
  }

  private setPage(page: number, updatePaginator = false): void {
    this.page = page;
    if (updatePaginator) {
      setTimeout(() => this.paginator?.changePage(page - 1), 0);
    }
  }
}
