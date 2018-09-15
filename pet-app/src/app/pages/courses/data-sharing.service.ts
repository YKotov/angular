import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class DataSharingService {

  private searchedElement = new BehaviorSubject('');
  getSearchedElement = this.searchedElement.asObservable();

  constructor() {
  }

  changeMessage(filtered: string) {
    this.searchedElement.next(filtered);
  }
}
