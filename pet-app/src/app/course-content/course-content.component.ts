import {Component, Input, OnInit} from '@angular/core';
import {Courses} from '../courses';
import {CourseItemService} from '../course-item.service';

@Component({
  selector: 'app-cours-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.css'],
})

export class CourseContentComponent implements OnInit {

  @Input('courses') courses: Courses;

  public coursItemArr = [];

  constructor(private coursItem: CourseItemService) {
  }

  ngOnInit() {
    this.coursItem.getCourseItem().subscribe(data => this.coursItemArr = data);
  }

}
