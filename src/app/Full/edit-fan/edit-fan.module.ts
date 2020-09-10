import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditFanPageRoutingModule } from './edit-fan-routing.module';

import { EditFanPage } from './edit-fan.page';
import { AddYourFansOnePageModule } from 'src/app/Script/add-your-fans-one/add-your-fans-one.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    EditFanPageRoutingModule,
    AddYourFansOnePageModule
  ],
  declarations: [EditFanPage]
})
export class EditFanPageModule {}
