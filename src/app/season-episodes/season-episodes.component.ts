import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { ShowsService } from '../shared/services/shows.service';
import { IEpisodeItem } from '../shared/interfaces/episode-item';

@Component({
  selector: 'app-season-episodes',
  templateUrl: './season-episodes.component.html',
  styleUrls: [ './season-episodes.component.scss' ]
})
export class SeasonEpisodesComponent implements OnInit {

  episodes: IEpisodeItem[];
  seasonNumber: number;
  id: number;

  constructor(
    private showsService: ShowsService,
    private route: ActivatedRoute,
    private location: Location) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.id = params.id);
    this.getSeasonEpisodes();
  }

  getSeasonEpisodes(): void {
    this.showsService.getSeasonEpisodes(this.id).subscribe(episodes => {
      this.episodes = episodes;
      this.seasonNumber = episodes[0].season;
    });
  }

  goBack(): void {
    this.location.back();
  }
}
