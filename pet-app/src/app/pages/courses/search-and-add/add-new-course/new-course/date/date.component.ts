import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
