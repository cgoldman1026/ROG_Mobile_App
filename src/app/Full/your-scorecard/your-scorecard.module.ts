import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YourScorecardPageRoutingModule } from './your-scorecard-routing.module';

import { YourScorecardPage } from './your-scorecard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YourScorecardPageRoutingModule
  ],
  declarations: [YourScorecardPage]
})
export class YourScorecardPageModule {}
