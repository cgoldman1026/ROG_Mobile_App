import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TesterPagePageRoutingModule } from './tester-page-routing.module';

import { TesterPagePage } from './tester-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TesterPagePageRoutingModule
  ],
  declarations: [TesterPagePage]
})
export class TesterPagePageModule {}
