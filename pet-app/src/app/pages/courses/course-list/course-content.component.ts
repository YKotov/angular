import {Component, Output, OnInit} from '@angular/core';
import {CourseItemService} from './course-item.service';

@Component({
  selector: 'app-course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.css'],
})

export class CourseContentComponent implements OnInit {

  public courseItemArr = [];

  constructor(private courseItem: CourseItemService) {
  }

  ngOnInit() {
    this.courseItem.getCourseItem().subscribe(data => this.courseItemArr = data);
  }

}
