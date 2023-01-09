import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person, PersonCredit } from 'src/app/models/person.model';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent {
  public person: Person | undefined;
  private readonly personIdAttr = 'personId';

  constructor(
    private activatedRouter: ActivatedRoute,
    private peopleService: PeopleService
  ) {}

  public ngOnInit() {
    this.activatedRouter.params.subscribe((res) => {
      this.getPerson(res[this.personIdAttr]);
    });
  }

  private getPerson(personid: number) {
    this.peopleService.get(personid).subscribe((res) => {
      this.person = res;
    });
  }
}
