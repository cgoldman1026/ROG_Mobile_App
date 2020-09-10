import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfirmCampaignServiceService {

  constructor() { }

  getOrganizationName() {
    // This function needs to return the organization name based on the PIN enetered
    // on the Campaign PIN screen.
    return "John Jay High School "
  }

  getOrganizationCategory() {
    // This function needs to return the organization category (sport) based on the PIN enetered
    // on the Campaign PIN screen.
    return "Baseball"
  }

  getOrganizationLogo() {
    // This function needs to return the organization image based on the PIN enetered
    // on the Campaign PIN screen. If there isn't a custom image, then we need to
    // return a default image based on which sport the PIN belongs to
    return "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcReKMfmcxsqdPiVprP_NsNxZ4tjnUY3hDBRWD0Bp1bN1R3PrrSQ&usqp=CAU"
  }
}
