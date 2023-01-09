import { AfterViewInit, Component, ViewChild } from '@angular/core';
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
  @ViewChild('paginator', { static: true }) paginator: Paginator | undefined;
  public movies: Array<Movie> = [];
  public page = 1;
  public totalPages = 1;
  public totalResults = 1;

  constructor(
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private movieService: MovieService,
    private generalService: GeneralService
  ) {}

  public ngAfterViewInit(): void {
    this.activatedRouter.params.subscribe((res) => {
      this.page = Number.parseInt(res['page']);
      this.setPage(this.page, true);
      this.getMovies(this.page);
    });
  }

  public onClickPoster(movie: Movie): void {
    this.generalService.navigateToMovie(this.router, movie.id.toString());
  }

  public onPageChange(value: any): void {
    const page = Number.parseInt(value.page) + 1;
    this.generalService.navigateToPopularMovies(this.router, page);
  }

  private getMovies(page = 1): void {
    this.movieService.getPopular(page).subscribe((res) => {
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
