import { Component, OnInit, inject } from '@angular/core';
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
  private _activatedRoute = inject(ActivatedRoute);
  private _movieService = inject(MovieService);
  private readonly _movieIdAttr = 'movieId';

  public ngOnInit() {
    this._activatedRoute.params.subscribe((res) => {
      this.getMovie(res[this._movieIdAttr]);
    });
  }

 

  private getMovie(movieId: number) {
    this._movieService.get(movieId).subscribe((res) => {
      this.movie = res;
    });
  }
}
