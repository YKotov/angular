import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {Course} from '../../../../models/course';

@Directive({
  selector: '[appActualizationCrs]'
})


export class ActualizationCrsDirective implements OnInit {
  private currentDate: any = new Date();
  @Input('appActualizationCrs') appActualizationCrs: Course['data'];

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    const currentDate = Date.parse(this.currentDate);
    const creationDate = Date.parse(this.appActualizationCrs);
    const twoWeeks = 12096e5;

    if (creationDate < currentDate && creationDate >= (currentDate - twoWeeks)) {
      this.actualData('green', '3px');
    } else if (creationDate > currentDate) {
      this.actualData('blue', '3px');
    }
  }


  private actualData(color: string, width: string) {
    this.el.nativeElement.style.borderColor = color;
    this.el.nativeElement.style.borderWidth = width;
  }
}
