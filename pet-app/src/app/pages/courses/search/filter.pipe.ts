import {Pipe, PipeTransform} from '@angular/core';
import {Course} from '../../../models/course';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {

  transform(items: Course[], cFilter: string): Course[] {
    if (!items || !cFilter) {
      return items;
    }
    const result = items.filter(item => item.title.toLowerCase().indexOf(cFilter.toLowerCase()) > -1);
    return result;
  }

}
