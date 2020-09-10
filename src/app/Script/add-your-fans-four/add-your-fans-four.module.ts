import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddYourFansFourPageRoutingModule } from './add-your-fans-four-routing.module';

import { AddYourFansFourPage } from './add-your-fans-four.page';
import { AddYourFansOnePageModule } from '../add-your-fans-one/add-your-fans-one.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddYourFansFourPageRoutingModule,
    AddYourFansOnePageModule
  ],
  declarations: [AddYourFansFourPage]
})
export class AddYourFansFourPageModule {}
