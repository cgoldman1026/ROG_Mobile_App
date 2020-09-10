import { ScrollVanishDirective } from '../../Global/scroll-vanish.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FansModalPageRoutingModule } from './fans-modal-routing.module';

import { FansModalPage } from './fans-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FansModalPageRoutingModule
  ],
  declarations: [FansModalPage, ScrollVanishDirective]
})
export class FansModalPageModule {}
