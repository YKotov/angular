import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrsDetailComponent } from './crs-detail.component';

describe('CrsDetailComponent', () => {
  let component: CrsDetailComponent;
  let fixture: ComponentFixture<CrsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
