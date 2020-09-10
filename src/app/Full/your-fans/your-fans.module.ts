import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YourFansPageRoutingModule } from './your-fans-routing.module';

import { YourFansPage } from './your-fans.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    YourFansPageRoutingModule
  ],
  declarations: [YourFansPage]
})
export class YourFansPageModule {}
