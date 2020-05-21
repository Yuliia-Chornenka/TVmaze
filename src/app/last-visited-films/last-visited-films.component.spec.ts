import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastVisitedFilmsComponent } from './last-visited-films.component';

describe('LastVisitedFilmsComponent', () => {
  let component: LastVisitedFilmsComponent;
  let fixture: ComponentFixture<LastVisitedFilmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastVisitedFilmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastVisitedFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
