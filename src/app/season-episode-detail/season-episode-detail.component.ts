import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ShowsService } from '../shared/services/shows.service';
import { ActivatedRoute } from '@angular/router';
import { IEpisodeItem } from '../shared/interfaces/episode-item';

@Component({
  selector: 'app-season-episode-detail',
  templateUrl: './season-episode-detail.component.html',
  styleUrls: [ './season-episode-detail.component.scss' ]
})
export class SeasonEpisodeDetailComponent implements OnInit {

  episode: IEpisodeItem;
  id: number;

  constructor(
    private showsService: ShowsService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => this.id = params.id);
    this.getSeasonEpisodes();
  }

  getSeasonEpisodes(): void {
    this.showsService.getEpisodeDetail(this.id).subscribe(episode => {
      this.episode = episode;
    });
  }

  goBack(): void {
    this.location.back();
  }
}
