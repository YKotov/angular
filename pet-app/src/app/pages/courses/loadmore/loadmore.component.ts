import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-loadmore',
  templateUrl: './loadmore.component.html',
  styleUrls: ['./loadmore.component.css']
})
export class LoadmoreComponent implements OnInit {

  @Input() public elements: boolean;
  constructor() {
  }

  ngOnInit() {
    this.elements = false;
  }

}
