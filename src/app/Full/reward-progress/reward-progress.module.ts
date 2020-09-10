import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RewardProgressPageRoutingModule } from './reward-progress-routing.module';

import { RewardProgressPage } from './reward-progress.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RewardProgressPageRoutingModule
  ],
  declarations: [RewardProgressPage]
})
export class RewardProgressPageModule {}
