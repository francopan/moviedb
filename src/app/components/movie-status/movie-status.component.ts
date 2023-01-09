import { Component, Input } from '@angular/core';
import { MovieStatus } from 'src/app/enums/movie-status.enum';

@Component({
  selector: 'app-movie-status',
  templateUrl: './movie-status.component.html',
  styleUrls: ['./movie-status.component.scss'],
})
export class MovieStatusComponent {
  private _status: MovieStatus = MovieStatus.Released;
  private _color: string = 'success';

  @Input()
  public set status(status: MovieStatus) {
    this._status = status;
    this._color = this.getColorFromStatus(this._status);
  }

  public get status(): MovieStatus {
    return this._status
  }

  public get color(): string {
    return this._color;
  }

  private getColorFromStatus(status: MovieStatus): string {
    switch(status) {
      case MovieStatus.Released : return 'success';
      case MovieStatus.Canceled: return 'danger';
      case MovieStatus.InProduction: return 'warning';
      default: return 'info';
    }
  }

}
