import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AutoCompleteCompleteEvent, AutoCompleteOnSelectEvent } from 'primeng/autocomplete';
import { ObjectType } from 'src/app/enums/object-type.enum';

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
  public selection: SearchResult | string | undefined = '';
  public results: SearchResult[] = [];

  private _generalService = inject(GeneralService);
  private _router = inject(Router);

  public onSelect(selected: AutoCompleteOnSelectEvent): void {
    const selectedValue = (selected.value as SearchResult);
    switch (selectedValue.type) {
      case ObjectType.Movie: {
        this.selection = (selectedValue.value as Movie).title;
        this._generalService.navigateToMovie(
          this._router,
          (selectedValue.value as Movie).id.toString()
        );
      }
    }
  }

  public search(event: AutoCompleteCompleteEvent): void {
    this._generalService.search(event.query).then((data) => {
      this.results = data;
    });
  }

  public formatDate(date: string | Date): string {
    return Utils.formatDate(date);
  }
}
