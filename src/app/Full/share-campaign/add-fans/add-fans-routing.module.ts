import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddFansPage } from './add-fans.page';

const routes: Routes = [
  {
    path: '',
    component: AddFansPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddFansPageRoutingModule {}
