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

  constructor(private data: DataSharingService) {
  }

  ngOnInit() {
    this.data.getSearchedElement.subscribe(cFilter => this.cFilter = cFilter);
  }

  search() {
    this.data.serchedString(this.cFilter);
  }
}
