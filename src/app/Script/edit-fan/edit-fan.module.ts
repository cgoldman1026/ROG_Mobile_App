import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditFanPageRoutingModule } from './edit-fan-routing.module';

import { EditFanPage } from './edit-fan.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    EditFanPageRoutingModule
  ],
  declarations: [EditFanPage]
})
export class EditFanPageModule {}
