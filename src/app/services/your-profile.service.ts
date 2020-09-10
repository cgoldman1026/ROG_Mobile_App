import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YourProfileService {


  _firstName: string;
  _lastName: string;
  _mobileNumber: string;
  _emailAddress: string;


  constructor() { 
    // these values are hardcoded but really need to be fetched from the server

    this.firstName = 'Chase';
    this.lastName = 'Goldman';
    this.emailAddress = 'chase@gmail.com';
    this.mobileNumber = '(914) 505-0583';

  }


  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName
  }

  get mobileNumber() {
    return this._mobileNumber;
  }

  get emailAddress() {
    return this._emailAddress
  }

  set firstName(firstName) {
    this._firstName = firstName;
  }

  set lastName(lastName) {
    this._lastName = lastName;
  }

  set mobileNumber(mobileNumber) {
    this._mobileNumber = mobileNumber;
  }

  set emailAddress(emailAddress) {
    this._emailAddress = emailAddress;
  }

  setAll(firstName, lastName, mobileNumber, emailAddress) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._mobileNumber = mobileNumber;
    this._emailAddress = emailAddress;
  }

}
