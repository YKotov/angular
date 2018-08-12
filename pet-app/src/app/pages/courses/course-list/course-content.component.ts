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
  @Output() public consoledElement: any = new EventEmitter();


  constructor(private courseItem: CourseItemService) {
  }

  deleteItemID = (event: any) => {
    console.log('id: ' + event);
  }

  ngOnInit() {
    this.courseItem.getCourseItem().subscribe(data => this.courseItemArr = data);
  }
}
