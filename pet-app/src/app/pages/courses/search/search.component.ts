import {
  Component, Input,
  OnChanges, OnInit
} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() console: any;

  constructor() {
    this.console = console;
  }

  ngOnInit() {
  }

}
