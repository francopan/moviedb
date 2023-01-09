import { Component, EventEmitter, Input, Output } from '@angular/core';
import { api_url } from 'src/app/constants/api_url.constant';
import { Person, PersonCredit } from 'src/app/models/person.model';

@Component({
  selector: 'app-person-photo',
  templateUrl: './person-photo.component.html',
  styleUrls: ['./person-photo.component.scss'],
})
export class PersonPhotoComponent {
  @Input() includeName = true;
  @Input() public width = 138;
  @Input() public height = 175;
  @Output() clicked = new EventEmitter<PersonCredit | Person>();
  public src: string | undefined;

  private _person: PersonCredit | Person | undefined;

  @Input() set person(person: PersonCredit | Person | undefined) {
    this._person = person;
    if (this._person?.profile_path) {
      this.src = `${api_url.image}/w${this.width}_and_h${this.height}_face/${this._person?.profile_path}`;
    }
  }

  public get person(): PersonCredit | Person | undefined {
    return this._person;
  }

  public onClick() {
    if (this._person) {
      this.clicked.next(this._person);
    }
  }
}
