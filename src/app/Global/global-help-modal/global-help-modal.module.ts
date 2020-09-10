import { ScrollVanishDirective } from '../scroll-vanish.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GlobalHelpModalPageRoutingModule } from './global-help-modal-routing.module';

import { GlobalHelpModalPage } from './global-help-modal.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlobalHelpModalPageRoutingModule,
    BrowserModule
  ],
  declarations: [GlobalHelpModalPage, ScrollVanishDirective]
})
export class GlobalHelpModalPageModule {}
