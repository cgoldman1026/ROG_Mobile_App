import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddYourFansOnePage } from './add-your-fans-one.page';

const routes: Routes = [
  {
    path: '',
    component: AddYourFansOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddYourFansOnePageRoutingModule {}
