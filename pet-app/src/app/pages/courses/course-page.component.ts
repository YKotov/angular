import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
