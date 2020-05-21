import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonEpisodeDetailComponent } from './season-episode-detail.component';

describe('SeasonEpisodeDetailComponent', () => {
  let component: SeasonEpisodeDetailComponent;
  let fixture: ComponentFixture<SeasonEpisodeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonEpisodeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonEpisodeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
