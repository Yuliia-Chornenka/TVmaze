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
  id: number;

  constructor(
    private showsService: ShowsService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.id = params.id);
    this.getShow();
    this.getCast();
    this.getSeasons();
  }

  getShow(): void {
    this.showsService.getShow(this.id).subscribe(showItem => {
      this.show = showItem;
      this.showsService.addLastVisitedFilm(showItem).subscribe();
    });
  }

  getCast(): void {
    this.showsService.getCast(this.id).subscribe(cast => {
      this.cast = cast;
    });
  }

  getSeasons(): void {
    this.showsService.getSeasons(this.id).subscribe(seasons => {
      this.seasons = seasons;
    });
  }
}
