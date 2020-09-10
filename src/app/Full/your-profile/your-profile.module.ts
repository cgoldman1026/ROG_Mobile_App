import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YourProfilePageRoutingModule } from './your-profile-routing.module';

import { YourProfilePage } from './your-profile.page';
import { AddYourFansOnePageModule } from 'src/app/Script/add-your-fans-one/add-your-fans-one.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YourProfilePageRoutingModule,
    AddYourFansOnePageModule
  ],
  declarations: [YourProfilePage]
})
export class YourProfilePageModule {}
