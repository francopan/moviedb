import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent {
  @Input() voteAverage: number = 0;
  @Input() voteCount: number | undefined;
  @Input() size = 70;

  public getVoteAverageFormatted(): number {
    return Number.parseFloat(this.voteAverage.toPrecision(2));
  }

  public getColor(): string {
    if (this.voteAverage >= 7) {
      return '#6ebe71';
    }
    if (this.voteAverage >= 5) {
      return '#fbc02d';
    }
    if (this.voteAverage > 3) {
      return '#f79530';
    }
    if (this.voteAverage > 0) {
      return '#d9362b';
    }
    return '#ffffff';
  }
}
