import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCreditComponent } from './movie-credit.component';

describe('CastComponent', () => {
  let component: MovieCreditComponent;
  let fixture: ComponentFixture<MovieCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieCreditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
