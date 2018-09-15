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

  public consoledElement: any;
  cFilter: string;

  logging() {
    this.consoledElement.log(this.cFilter);
    this.consoledElement.data = null ? 'empty' : '';
  }

  constructor(private data: DataSharingService) {
  }

  ngOnInit() {
    this.data.getSearchedElement.subscribe(cFilter => this.cFilter = cFilter);
  }

  newMessage() {
    this.data.changeMessage(this.cFilter);
  }
}
