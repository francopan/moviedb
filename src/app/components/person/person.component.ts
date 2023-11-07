import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from 'src/app/models/person.model';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent {
  public person: Person | undefined;
  public preview = false;
  private _activatedRouter = inject(ActivatedRoute);
  private _peopleService = inject(PeopleService);
  private readonly _personIdAttr = 'personId';

  public ngOnInit() {
    this._activatedRouter.params.subscribe((res) => {
      this.getPerson(res[this._personIdAttr]);
    });
  }

  private getPerson(personid: number) {
    this._peopleService.get(personid).subscribe((res) => {
      this.person = res;
    });
  }
}
