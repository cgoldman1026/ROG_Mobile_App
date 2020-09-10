import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddYourFansFivePage } from './add-your-fans-five.page';

const routes: Routes = [
  {
    path: '',
    component: AddYourFansFivePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddYourFansFivePageRoutingModule {}
