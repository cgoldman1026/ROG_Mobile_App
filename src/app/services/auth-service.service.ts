import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  userIsAuthenticated = false;

  constructor() { }

  logout() {
    this.userIsAuthenticated = false;
    console.log('Logging out!')
  }

  login() {
    this.userIsAuthenticated = true;
  }


}
