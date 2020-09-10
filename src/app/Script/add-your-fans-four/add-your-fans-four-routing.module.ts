import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddYourFansFourPage } from './add-your-fans-four.page';

const routes: Routes = [
  {
    path: '',
    component: AddYourFansFourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddYourFansFourPageRoutingModule {}
