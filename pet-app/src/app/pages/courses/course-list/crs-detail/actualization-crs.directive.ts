import {Directive, ElementRef, Injectable, Input} from '@angular/core';
import {Course} from '../../../../models/course';
import {CourseListService} from '../course-list.service';

@Directive({
  selector: '[appActualizationCrs]'
})


export class ActualizationCrsDirective {
  private currentDate: Date = new Date();
  @Input('appActualizationCrs') appActualizationCrs: Course['data'];

  constructor(el: ElementRef) {
    console.log(this.appActualizationCrs);

    if (this.currentDate <= this.appActualizationCrs) {
      el.nativeElement.style.borderColor = 'green';
    } else {
      el.nativeElement.style.borderColor = 'red';
    }
  }

}
