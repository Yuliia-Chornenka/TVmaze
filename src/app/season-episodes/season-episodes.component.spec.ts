import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonEpisodesComponent } from './season-episodes.component';

describe('SeasonEpisodesComponent', () => {
  let component: SeasonEpisodesComponent;
  let fixture: ComponentFixture<SeasonEpisodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonEpisodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonEpisodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
