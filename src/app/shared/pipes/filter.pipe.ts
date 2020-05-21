import { Pipe, PipeTransform } from '@angular/core';
import { IShowItem } from '../interfaces/show-item';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(showsList: IShowItem[], searchValue, fieldName: string) {
    if (!showsList.length || searchValue === '') {
      return showsList;
    }
    return showsList.filter((showItem: IShowItem) => showItem[fieldName].indexOf(searchValue) !== -1);
  }
}
