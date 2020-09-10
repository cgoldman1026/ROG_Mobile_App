import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CampaignPinNumberServiceService {

  validPin = false;

  constructor() { }

  pinHandler(pin: string) {
    // Need this function to scan the PINs in the database and return true or false
    // depending whether or not the PIN is in the database
    if (pin === '123456789') {
      return true;
    }
    else {
      return false;
    }

  }


}
