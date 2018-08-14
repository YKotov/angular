import {
  Component, OnInit
} from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  public consoledElement: any;
  logging() {
    this.consoledElement.log(this.consoledElement.data);
    this.consoledElement.data = null ? 'empty' : '';
  }

  constructor() {
    this.consoledElement = console;
    this.logging();
  }

  ngOnInit() {
  }
}
