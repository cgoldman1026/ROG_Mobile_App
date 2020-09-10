import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Donation {
	donorFirstName: string;
	donorLastName: string;
	donorAmount: string;
	donorDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class DonationServiceService {

  nationalAverageDonations = 5;

  private _donations = new BehaviorSubject<Donation[]>([
    {
      donorFirstName: 'Jon',
      donorLastName: 'Goldman',
      donorAmount: '100',
      donorDate: '10/1/2019',
    },
    {
      donorFirstName: 'Chase',
      donorLastName: 'Goldman',
      donorAmount: '500',
      donorDate: '10/2/2019',
    },
    {
      donorFirstName: 'Jon',
      donorLastName: 'Goldman',
      donorAmount: '100',
      donorDate: '11/7/2019',
    },
    {
      donorFirstName: 'Chase',
      donorLastName: 'Goldman',
      donorAmount: '500',
      donorDate: '12/1/2019',
    },
    {
      donorFirstName: 'Jon',
      donorLastName: 'Goldman',
      donorAmount: '100',
      donorDate: '3/7/2019',
    },
    {
      donorFirstName: 'Chase',
      donorLastName: 'Goldman',
      donorAmount: '500',
      donorDate: '4/26/2020',
    },
    {
      donorFirstName: 'Chase',
      donorLastName: 'Goldman',
      donorAmount: '5000',
      donorDate: '4/26/2020',
    }
  ])

  constructor() { }

  get donations() {
    return this._donations;
  }


}
