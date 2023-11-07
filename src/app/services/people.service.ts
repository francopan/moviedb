import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { api_url } from '../constants/api_url.constant';
import { Person, PersonCredit } from '../models/person.model';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  private _httpClient = inject(HttpClient);
  private readonly 'url' = `${api_url.apiv3}/person`;

  public get(personId: number) {
    return this._httpClient.get<Person>(`${this.url}/${personId}`);
  }
}
