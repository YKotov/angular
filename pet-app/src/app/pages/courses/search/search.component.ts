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
  public counter = 0;

  loggin() {
    this.consoledElement.log('#' + this.counter + ' ' + this.consoledElement.data);
    if (this.consoledElement.data !== '' ) {
      this.consoledElement.data = null ? 'empty' : '';
      this.counter += 1;
    }
  }

  constructor() {
    this.consoledElement = console;
    this.loggin();
  }

  ngOnInit() {
  }
}
