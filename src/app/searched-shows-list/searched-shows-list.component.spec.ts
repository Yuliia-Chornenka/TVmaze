import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedShowsListComponent } from './searched-shows-list.component';

describe('SearchedShowsListComponent', () => {
  let component: SearchedShowsListComponent;
  let fixture: ComponentFixture<SearchedShowsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchedShowsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchedShowsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
