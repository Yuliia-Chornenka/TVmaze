import { Component, Input, OnInit } from '@angular/core';
import { IShowItem } from '../shared/interfaces/show-item';

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrls: [ './show-item.component.scss' ]
})
export class ShowItemComponent implements OnInit {

  @Input() showsList: IShowItem[] = [];
  @Input() selectedCategory: string;

  isSearchShow = false;

  constructor() {
  }

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo(): void {
    this.showsList.forEach((show: IShowItem) => {
      if (!show.id) {
        this.isSearchShow = true;
      }
    });
  }
}
