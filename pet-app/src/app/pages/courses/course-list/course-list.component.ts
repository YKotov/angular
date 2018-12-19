import {ApplicationRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, Output} from '@angular/core';
import {CourseListService} from './course-list.service';
import {Observable} from 'rxjs';
import {Course} from '../../../models/course';
import {DataSharingService} from '../data-sharing.service';

@Component({
  selector: 'app-course-content',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CourseListComponent implements OnInit {

  public courseItemArr: Observable<Course[]>;
  public maxPerPage = 8;
  public cFilter: string;
  public contentCours;

  constructor(private courseItem: CourseListService, private dataSharingService: DataSharingService, private cd: ChangeDetectorRef) {
  }

  deleteItem(removedIteme: string) {

    const quest = confirm('Do you realy want delete this course?');
    if (quest) {
      const pass = prompt('Pss... Insert password: ', '');
      if (pass === '1') {
        this.courseItem.courseItemRemove(removedIteme);
        this.cFilter = '';
      } else {
        alert('Nope');
        alert('Heroes mb help!');
      }
    } else {
      alert('Thanks');
    }
  }

  ngOnInit() {
    this.courseItemArr = this.courseItem.getCourseItem();
    this.contentCours = Object.values(this.courseItemArr);

    this.dataSharingService.getSearchedElement.subscribe(cFilter => this.cFilter = cFilter);
    this.cd.markForCheck();
    this.cd.detectChanges();

  }
}
