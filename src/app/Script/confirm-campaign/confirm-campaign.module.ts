import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmCampaignPageRoutingModule } from './confirm-campaign-routing.module';

import { ConfirmCampaignPage } from './confirm-campaign.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmCampaignPageRoutingModule
  ],
  declarations: [ConfirmCampaignPage]
})
export class ConfirmCampaignPageModule {}
