import {Pipe, PipeTransform} from '@angular/core';
import {Course} from '../../../../models/course';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(items: Course[], cFilter: string): Course[] {
    if (!items || !cFilter) {
      console.log(items);
      return items;
    }
    const result = items.filter(item => item.title.toLowerCase().indexOf(cFilter.toLowerCase()) > -1);
    console.log(result);
    return result;
  }

}
