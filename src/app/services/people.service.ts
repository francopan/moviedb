import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api_url } from '../constants/api_url.constant';
import { Person, PersonCredit } from '../models/person.model';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  private readonly 'url' = `${api_url.apiv3}/person`;

  constructor(private httpClient: HttpClient) {}

  public get(personId: number) {
    return this.httpClient.get<Person>(`${this.url}/${personId}`);
  }
}
