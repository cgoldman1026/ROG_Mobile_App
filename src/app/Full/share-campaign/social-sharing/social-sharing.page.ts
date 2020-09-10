import { ShareCampaignPage } from './../../../Script/share-campaign/share-campaign.page';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-sharing',
  templateUrl: './social-sharing.page.html',
  styleUrls: ['./social-sharing.page.scss'],
})
export class SocialSharingPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  onFacebookClick() {
    console.log('Facebook clicked!')
  }

  onTwitterClick() {
    console.log('Twitter clicked!')
  }

  onInstagramClick() {
    console.log('Instagram clicked!')
  }

}
