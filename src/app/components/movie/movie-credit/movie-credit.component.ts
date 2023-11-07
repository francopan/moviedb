import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MovieCredit } from 'src/app/models/movie-credit.model';
import { Movie } from 'src/app/models/movie.model';
import { Person, PersonCredit } from 'src/app/models/person.model';
import { GeneralService } from 'src/app/services/general.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-credit',
  templateUrl: './movie-credit.component.html',
  styleUrls: ['./movie-credit.component.scss'],
})
export class MovieCreditComponent {
  public credit: MovieCredit | undefined;
  private _movie: Movie | undefined;
  private _router = inject(Router);
  private _movieService = inject(MovieService);
  private _generalService = inject(GeneralService);


  @Input() public set movie(movie: Movie | undefined) {
    this._movie = movie;
    this.getCredits();
  }

  public get movie(): Movie | undefined {
    return this._movie;
  }

  public getSearchValue(event: any): string {
    return event.target.value;
  }

  public onCastClicked(cast: PersonCredit | Person) {
    this._generalService.navigateToPerson(this._router, cast.id.toString());
  }

  private getCredits(): void {
    if (this.movie !== undefined && this.movie !== null) {
      this._movieService.getCredits(this.movie.id).subscribe((res) => {
        res.crew.sort((a, b) =>
          a.department.toLowerCase().localeCompare(b.department.toLowerCase())
        );
        this.credit = res;
      });
    } else {
      this.credit = undefined;
    }
  }
}
