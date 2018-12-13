import {Injectable} from '@angular/core';
import {User} from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  constructor() {
    const users = this.getUser();
  }

  public addUser(text: any): void {
    this.setLocalStorageUsers(text);
  }

  public getUser(): User[] {
    const localStorageItem = JSON.parse(localStorage.getItem('users'));
    return localStorageItem == null ? [] : localStorageItem.users;
  }

  public removeUsers() {
    localStorage.clear();
  }

  private setLocalStorageUsers(users: User[]): void {
    localStorage.setItem('users', JSON.stringify({users: users}));
  }

  public IsAuthenticated() {
    if (this.getUser().length > 0) {
      return true;
    } else {
      return false;
    }
  }
}

