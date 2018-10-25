import {Pipe, PipeTransform} from '@angular/core';
import {Course} from '../../../models/course';


@Pipe({
  name: 'sorting',
})
export class SortingPipe implements PipeTransform {
  transform(array: Course[], field: Date): Course[] {
    for (let key in array) {
      array.sort((a: any, b: any) => {
        if (a.data > b.data) {
          return -1;
        } else if (a.data < b.data) {
          return 1;
        } else {
          return 0;
        }

      });
    }
    return array;
  }
}
