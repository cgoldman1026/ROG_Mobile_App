import { EditFanPageModule } from './../edit-fan/edit-fan.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YourFansPage } from './your-fans.page';

const routes: Routes = [
  {
    path: '',
    component: YourFansPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YourFansPageRoutingModule {}
