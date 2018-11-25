import {
  Component, Input, OnInit, Output
} from '@angular/core';
import {DataSharingService} from '../data-sharing.service';
import {Observable} from 'rxjs';
import {Course} from '../../../models/course';
import {CourseListService} from '../course-list/course-list.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  public cFilter: string;

  constructor(private dataSharingService: DataSharingService, private courseItem: CourseListService) {
  }

  ngOnInit() {
    this.dataSharingService.getSearchedElement.subscribe(cFilter => this.cFilter = cFilter);
  }

  search() {
    this.dataSharingService.searchedString(this.cFilter);
  }

  clearSearch() {
    this.cFilter = '';
  }
}
