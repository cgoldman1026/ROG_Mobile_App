import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddYourFansThreePageRoutingModule } from './add-your-fans-three-routing.module';

import { AddYourFansThreePage } from './add-your-fans-three.page';
import { AddYourFansOnePageModule } from '../add-your-fans-one/add-your-fans-one.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddYourFansThreePageRoutingModule,
    AddYourFansOnePageModule
  ],
  declarations: [AddYourFansThreePage]
})
export class AddYourFansThreePageModule {}
