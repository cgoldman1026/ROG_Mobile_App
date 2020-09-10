import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditProfilePageRoutingModule } from './edit-profile-routing.module';

import { EditProfilePage } from './edit-profile.page';
import { AddYourFansOnePageModule } from 'src/app/Script/add-your-fans-one/add-your-fans-one.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    EditProfilePageRoutingModule,
    FormsModule,
    AddYourFansOnePageModule
  ],
  declarations: [EditProfilePage]
})

export class EditProfilePageModule {}
