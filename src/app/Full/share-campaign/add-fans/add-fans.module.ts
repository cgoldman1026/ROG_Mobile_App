import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddFansPageRoutingModule } from './add-fans-routing.module';

import { AddFansPage } from './add-fans.page';
import { AddYourFansOnePageModule } from 'src/app/Script/add-your-fans-one/add-your-fans-one.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    AddFansPageRoutingModule,
    AddYourFansOnePageModule
  ],
  declarations: [AddFansPage]
})
export class AddFansPageModule {}
