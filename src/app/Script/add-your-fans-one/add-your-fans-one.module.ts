import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { AddYourFansOnePageRoutingModule } from './add-your-fans-one-routing.module';

import { AddYourFansOnePage } from './add-your-fans-one.page';
import { PhoneMaskDirective } from '../../phone-mask.directive';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddYourFansOnePageRoutingModule,
  ],
  exports: [PhoneMaskDirective],
  declarations: [AddYourFansOnePage, PhoneMaskDirective]
})
export class AddYourFansOnePageModule {}
