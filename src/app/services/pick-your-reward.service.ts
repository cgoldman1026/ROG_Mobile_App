import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PickYourRewardService {

  constructor() { }

  getThreeRewards() {
    return ["Enter Reward Choice #1 Here", "Enter Reward Choice #2 Here", "Enter Reward Choice #3 Here"];
  }

  getTwoRewards() {
    return ["Enter Reward Choice #1 Here", "Enter Reward Choice #2 Here"];
  }

  getOneReward() {
    return ["Enter Reward Choice #1 Here"];
  }

  getNoRewards() {
    return [];
  }

}
