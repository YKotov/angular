import {Component, Output, EventEmitter, OnInit} from '@angular/core';
import {CourseItemService} from './course-item.service';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.css'],
})

export class CourseContentComponent implements OnInit {

  public courseItemArr = [];
  public _id = '2';
  @Output() public consoledElement: any = new EventEmitter();


  constructor(private courseItem: CourseItemService) {
  }

  deleteItem() {
    this.consoledElement.emit(console.log(this.courseItemArr[this._id]._id));
  }

  ngOnInit() {
    this.courseItem.getCourseItem().subscribe(data => this.courseItemArr = data);
  }
}
