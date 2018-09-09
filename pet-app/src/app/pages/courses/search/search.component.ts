import {
  Component, Input, OnInit, Output
} from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  public consoledElement: any;
  @Input() cFilter: string;

  logging() {
    this.consoledElement.log(this.cFilter);
    this.consoledElement.data = null ? 'empty' : '';
  }

  constructor() {
  }

  ngOnInit() {
    this.consoledElement = console;
    this.logging();
  }
}
