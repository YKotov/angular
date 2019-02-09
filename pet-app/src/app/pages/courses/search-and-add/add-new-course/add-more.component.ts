import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AuthorizationService} from '../../../login/authorization.service';

@Component({
  selector: 'app-add-more',
  templateUrl: './add-more.component.html',
  styleUrls: ['./add-more.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddMoreComponent implements OnInit {

  public formAppearCl: boolean;

  constructor(private authService: AuthorizationService) {
  }

  ngOnInit() {
  }

  addMoreForm() {
    if (this.authService.IsAuthenticated()) {
      this.formAppearCl = true;
    } else {
      console.log('You should login into account');
    }
  }

  closeAddMoreForm() {
    this.formAppearCl = false;
    console.log('We did\'t clear the input field for continue filling');
  }
}
