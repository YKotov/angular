import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent implements OnInit {

  public duration: number;
  @Output() closeForm: any = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  closeFormEv(e) {
    this.closeForm.emit(e);
  }

}
