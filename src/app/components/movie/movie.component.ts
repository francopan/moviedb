import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  public movie: Movie | undefined;
  private readonly movieIdAttr = 'movieId';

  constructor(
    private activatedRouter: ActivatedRoute,
    private movieService: MovieService
  ) {}

  public ngOnInit() {
    this.activatedRouter.params.subscribe((res) => {
      this.getMovie(res[this.movieIdAttr]);
    });
  }

 

  private getMovie(movieId: number) {
    this.movieService.get(movieId).subscribe((res) => {
      this.movie = res;
    });
  }
}
