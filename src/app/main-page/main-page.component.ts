import { Component, OnInit } from '@angular/core';

import { ShowsService } from '../shared/services/shows.service';
import { IShowItem } from '../shared/interfaces/show-item';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: [ './main-page.component.scss' ]
})
export class MainPageComponent implements OnInit {

  showsList: IShowItem[] = [];
  categories = [];
  selectedCategory = 'Action';

  constructor(private showsService: ShowsService) {
  }

  ngOnInit(): void {
    this.getShows();
  }

  getShows(): void {
    this.showsService.getShows().subscribe(shows => {
      this.showsList = shows;

      shows.forEach((show: IShowItem) => {
        show.genres.forEach((genre: string) => {
          if (!this.categories.includes(genre)) {
            this.categories.push(genre);
            this.categories.sort();
          }
        });
      });
    });
  }
}
