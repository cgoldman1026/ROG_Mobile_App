import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddYourFansThreePage } from './add-your-fans-three.page';

const routes: Routes = [
  {
    path: '',
    component: AddYourFansThreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddYourFansThreePageRoutingModule {}
