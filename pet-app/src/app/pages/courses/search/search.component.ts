import {
  Component, Input, OnInit, Output
} from '@angular/core';
import {DataSharingService} from '../data-sharing.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  public cFilter: string;

  logging() {
    console.log(this.cFilter);
  }

  constructor(private dataSharingService: DataSharingService) {
  }

  ngOnInit() {
    this.dataSharingService.getSearchedElement.subscribe(cFilter => this.cFilter = cFilter);
  }

  search() {
    this.dataSharingService.searchedString(this.cFilter);
  }
}
