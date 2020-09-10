import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScorecardServiceService {

  

  constructor() {}

  getFundsRaised() {
    return 50;
  }

  getFansAdded() {
    return 10;
  }

  getNumberOfDonations() {
    return 5;
  }

  getNationalFansAverage() {
    return 12;
  }

  getNationalDonationsAverage() {
    return 5;
  }


}
