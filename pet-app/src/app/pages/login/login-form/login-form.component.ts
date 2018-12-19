import {Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent implements OnInit {

  @Input() public formAppear;
  @Input() public nickname;
  @Output() nicknameInput: any = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }


  loginActionEv(e) {
    this.nicknameInput.emit(e);
  }

}
