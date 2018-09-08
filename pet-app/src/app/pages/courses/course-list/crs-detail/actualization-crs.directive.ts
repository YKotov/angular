import {Directive, ElementRef, Injectable, Input, OnInit} from '@angular/core';
import {Course} from '../../../../models/course';
import {CourseListService} from '../course-list.service';

@Directive({
  selector: '[appActualizationCrs]'
})


export class ActualizationCrsDirective implements OnInit {
  private currentDate: any = new Date();
  @Input('appActualizationCrs') appActualizationCrs: Course['data'];

  constructor(private el: ElementRef) {}
  ngOnInit() {
    const current = Date.parse(this.currentDate);
    const element = Date.parse(this.appActualizationCrs);

    if (current <= element) {
     console.log(element);
      this.highlight('red', '6px');
    }
  }



  private highlight(color: string, width: string) {
    this.el.nativeElement.style.borderColor = color;
    this.el.nativeElement.style.borderWidth = width;
  }
}
