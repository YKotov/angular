import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AuthorizationService} from '../../../login/authorization.service';

@Component({
  selector: 'app-add-more',
  templateUrl: './add-more.component.html',
  styleUrls: ['./add-more.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddMoreComponent implements OnInit {

  public formAppearCl: string;

  constructor(private authService: AuthorizationService) {
  }

  ngOnInit() {
  }

  addMoreForm() {
    if (this.authService.IsAuthenticated()) {
      this.formAppearCl = 'show-add-form';
    } else {
      console.log('You should login into account');
    }
  }

  closeAddMoreForm() {
    this.formAppearCl = '';
    console.log('We did\'t clear the input field for continue filling');
  }
}
