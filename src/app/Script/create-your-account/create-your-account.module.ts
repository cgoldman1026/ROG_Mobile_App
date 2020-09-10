import { AddYourFansOnePageModule } from './../add-your-fans-one/add-your-fans-one.module';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateYourAccountPageRoutingModule } from './create-your-account-routing.module';
import { CreateYourAccountPage } from './create-your-account.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    CreateYourAccountPageRoutingModule,
    AddYourFansOnePageModule
  ],
  declarations: [CreateYourAccountPage]
})
export class CreateYourAccountPageModule {}