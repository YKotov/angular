import {Component, Input, OnInit, Output} from '@angular/core';
import {CourseListService} from './course-list.service';
import {Observable} from 'rxjs';
import {Course} from '../../../models/course';

@Component({
  selector: 'app-course-content',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})

export class CourseListComponent implements OnInit {

  public courseItemArr: Observable<Course[]>;
  @Output() public maxPerPage = 8;
  public cFilter: string;


  constructor(private courseItem: CourseListService) {
  }

  loggerEvent(event) {
    console.log('id: ' + event);
  }

  ngOnInit() {
    this.courseItemArr = this.courseItem.getCourseItem();
  }
}
