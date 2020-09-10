import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FanDetailsPageRoutingModule } from './fan-details-routing.module';

import { FanDetailsPage } from './fan-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FanDetailsPageRoutingModule
  ],
  declarations: [FanDetailsPage]
})
export class FanDetailsPageModule {}
