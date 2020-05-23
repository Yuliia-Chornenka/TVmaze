import { Component, OnInit } from '@angular/core';
import { ShowsService } from '../shared/services/shows.service';
import { ActivatedRoute } from '@angular/router';
import { IShowItem } from '../shared/interfaces/show-item';
import { ICastItem } from '../shared/interfaces/cast-item';
import { ISeasonItem } from '../shared/interfaces/season-item';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: [ './show-detail.component.scss' ]
})
export class ShowDetailComponent implements OnInit {

  show: IShowItem;
  cast: ICastItem[];
  seasons: ISeasonItem[];

  constructor(
    private showsService: ShowsService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getShow(params.id);
      this.getCast(params.id);
      this.getSeasons(params.id);
    });
  }

  getShow(id): void {
    this.showsService.getShow(id).subscribe(showItem => {
      this.show = showItem;
      this.showsService.addLastVisitedFilm(showItem).subscribe();
    });
  }

  getCast(id): void {
    this.showsService.getCast(id).subscribe(cast => {
      this.cast = cast;
    });
  }

  getSeasons(id): void {
    this.showsService.getSeasons(id).subscribe(seasons => {
      this.seasons = seasons;
    });
  }
}
