import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionDataService {

  constructor() { }

  saveUserToken(token: string) {
    sessionStorage.setItem('token', token);
  }

  private getUserToken() {
    return sessionStorage.getItem('token');
  }

  isUserLoggedIn() {
    return this.getUserToken() !== null;
  }
}
