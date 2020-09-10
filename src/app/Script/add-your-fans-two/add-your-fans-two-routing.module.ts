import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddYourFansTwoPage } from './add-your-fans-two.page';

const routes: Routes = [
  {
    path: '',
    component: AddYourFansTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddYourFansTwoPageRoutingModule {}
