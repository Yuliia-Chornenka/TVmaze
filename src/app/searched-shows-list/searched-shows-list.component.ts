import { Component, OnInit } from '@angular/core';
import { ShowsService } from '../shared/services/shows.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-searched-shows-list',
  templateUrl: './searched-shows-list.component.html',
  styleUrls: [ './searched-shows-list.component.scss' ]
})
export class SearchedShowsListComponent implements OnInit {

  shows: string;
  searchedFilms = [];
  selectedCategory = '';

  constructor(
    private showsService: ShowsService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParam: any) => {
      this.shows = queryParam.show;
      this.getShows(this.shows);
    });
  }

  getShows(query): void {
    this.showsService.searchFilm(query).subscribe(shows => {
      this.searchedFilms = shows;
    });
  }
}
