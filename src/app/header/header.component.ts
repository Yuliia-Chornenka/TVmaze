import { Component, OnInit } from '@angular/core';
import { ShowsService } from '../shared/services/shows.service';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent implements OnInit {

  searchValue = '';
  searchedFilms = [];
  isSearchList = false;

  constructor(private showsService: ShowsService,
              public auth: AuthService) {
  }

  ngOnInit(): void {
  }

  getShows(query): void {
    this.isSearchList = true;
    this.showsService.searchFilm(query).subscribe(shows => {
      this.searchedFilms = shows.slice(0, 5);
    });
  }

  resetSearchInput(): void {
    this.searchValue = '';
    this.isSearchList = false;
  }

  resetSearchList(): void {
    this.isSearchList = false;
  }
}
