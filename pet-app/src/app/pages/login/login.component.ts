import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AuthorizationService} from './authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  public formAppear: string;
  public loginValue = 'Login';
  public loginCl = 'default';
  public nickName: string;
  public password: string;

  constructor(private authService: AuthorizationService) {
    this.nickName = '';
    this.password = '';
  }

  ngOnInit() {
  }

  showLoginForm() {
    if (this.authService.IsAuthenticated() || this.formAppear === '0') {
      this.formAppear = '-400px';
      this.loginValue = 'Login';
      this.loginCl = 'default';
    } else {
      this.formAppear = '0';
      this.loginValue = 'Hide Login Form';
      this.loginCl = 'activeForm';
    }

    if (this.authService.IsAuthenticated()) {
      console.log('You logged as: ' + this.authService.getUser());
    }
  }

  loginAction($event) {
    if ($event) {
      this.authService.addUser($event);
      console.log('You successful login into my beautiful app');
    }
    if (this.authService.IsAuthenticated()) {
      this.formAppear = '-400px';
      this.loginValue = 'Login';
      this.loginCl = 'default';
    }
  }

  logoutAction() {
    if (this.authService.IsAuthenticated()) {
      this.authService.removeUsers();
      console.log('You successful logout from app');
    } else {
      console.log('You are not login');
    }
  }

}
