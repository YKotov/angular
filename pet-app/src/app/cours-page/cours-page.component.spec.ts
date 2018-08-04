import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursPageComponent } from './cours-page.component';

describe('CoursPageComponent', () => {
  let component: CoursPageComponent;
  let fixture: ComponentFixture<CoursPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
