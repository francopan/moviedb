import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { SearchResult } from 'src/app/models/search-result.model';
import { GeneralService } from 'src/app/services/general.service';
import { Utils } from 'src/core/utils/utils';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  public text: string = '';
  public results: SearchResult[] = [];

  constructor(private generalService: GeneralService, private router: Router) {}

  public onSelect(selected: SearchResult): void {
    switch (selected.type) {
      case 'movie': {
        this.generalService.navigateToMovie(
          this.router,
          (selected.value as Movie).id.toString()
        );
      }
    }
    this.text = ''
  }

  public search(event: any): void {
    this.generalService.search(event.query).then((data) => {
      this.results = data;
    });
  }

  public formatDate(date: string | Date): string {
    return Utils.formatDate(date);
  }
}
