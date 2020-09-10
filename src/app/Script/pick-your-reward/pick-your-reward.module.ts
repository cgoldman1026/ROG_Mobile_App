import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PickYourRewardPageRoutingModule } from './pick-your-reward-routing.module';

import { PickYourRewardPage } from './pick-your-reward.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PickYourRewardPageRoutingModule
  ],
  declarations: [PickYourRewardPage]
})
export class PickYourRewardPageModule {}
