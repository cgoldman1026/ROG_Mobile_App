import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CampaignPINNumberPageRoutingModule } from './campaign-pin-number-routing.module';

import { CampaignPINNumberPage } from './campaign-pin-number.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CampaignPINNumberPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CampaignPINNumberPage]
})
export class CampaignPINNumberPageModule {}
