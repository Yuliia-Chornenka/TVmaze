import { Component, OnInit } from '@angular/core';
import { ShowsService } from '../shared/services/shows.service';
import { IShowItem } from '../shared/interfaces/show-item';

@Component({
  selector: 'app-last-visited-films',
  templateUrl: './last-visited-films.component.html',
  styleUrls: ['./last-visited-films.component.scss']
})
export class LastVisitedFilmsComponent implements OnInit {

  films: IShowItem[] = [];
  selectedCategory = '';

  constructor(
    private showsService: ShowsService) {
  }
  ngOnInit(): void {
    this.getLastVisitedFilms();
  }

  getLastVisitedFilms(): void {
    this.showsService.getLastVisitedFilms().subscribe((films: IShowItem[]) => {
      this.films = films;
    });
  }
}
