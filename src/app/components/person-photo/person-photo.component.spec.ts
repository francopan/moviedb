import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonPhotoComponent } from './person-photo.component';

describe('PersonCardComponent', () => {
  let component: PersonPhotoComponent;
  let fixture: ComponentFixture<PersonPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonPhotoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
