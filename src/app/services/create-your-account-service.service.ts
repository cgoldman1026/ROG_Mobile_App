import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateYourAccountServiceService {

  constructor() { }

  validateEmail(email) {
    if (email === "chase@gmail.com") {
      return false;
    }
    return true;
  }


}
