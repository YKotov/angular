import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number): string {

    value = Number(value);
    const h = Math.floor(value / 60);
    const m = Math.floor(value % 60 % 60);


    const hDisplay = h > 0 ? h + (h === 1 ? 'h ' : 'h ') : '';
    const mDisplay = m > 0 ? m + (m === 1 ? ' min' : ' mins') : '';
    console.log( hDisplay + mDisplay);
    return hDisplay + mDisplay;
  }
}
