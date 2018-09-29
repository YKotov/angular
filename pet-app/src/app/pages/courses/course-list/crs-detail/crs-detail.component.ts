import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Course} from '../../../../models/course';

@Component({
  selector: 'app-crs-detail',
  templateUrl: './crs-detail.component.html',
  styleUrls: ['./crs-detail.component.css']
})
export class CrsDetailComponent implements OnInit {

  @Input() public item: Course;
  @Input() public i;
  @Output() consoledElement: any = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  deleteItemID(e) {
    this.consoledElement.emit(e);
  }

}
