import {Component, Input, OnInit, Output} from '@angular/core';
import {CourseListService} from './course-list.service';
import {Observable} from 'rxjs';
import {Course} from '../../../models/course';
import {DataSharingService} from '../data-sharing.service';

@Component({
  selector: 'app-course-content',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})

export class CourseListComponent implements OnInit {

  public courseItemArr: Observable<Course[]>;
  public maxPerPage = 8;
  public cFilter: string;
  public contentCours;


  constructor(private courseItem: CourseListService, private dataSharingService: DataSharingService) {
  }

  loggerEvent(event) {
    console.log('id: ' + event);
  }

  deleteItem(removedIteme: string) {
    this.courseItem.courseItemRemove(removedIteme);
  }

  ngOnInit() {
    this.courseItemArr = this.courseItem.getCourseItem();
    this.contentCours = Object.values(this.courseItemArr);
    this.dataSharingService.getSearchedElement.subscribe(cFilter => this.cFilter = cFilter);
  }
}
