import { AddYourFansOnePageModule } from './../../../Script/add-your-fans-one/add-your-fans-one.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactUsPageRoutingModule } from './contact-us-routing.module';

import { ContactUsPage } from './contact-us.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ContactUsPageRoutingModule,
    AddYourFansOnePageModule
  ],
  declarations: [ContactUsPage]
})
export class ContactUsPageModule {}
