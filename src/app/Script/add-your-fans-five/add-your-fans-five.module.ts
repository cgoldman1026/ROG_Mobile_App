import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddYourFansFivePageRoutingModule } from './add-your-fans-five-routing.module';

import { AddYourFansFivePage } from './add-your-fans-five.page';
import { AddYourFansOnePageModule } from '../add-your-fans-one/add-your-fans-one.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddYourFansFivePageRoutingModule,
    AddYourFansOnePageModule
  ],
  declarations: [AddYourFansFivePage]
})
export class AddYourFansFivePageModule {}
