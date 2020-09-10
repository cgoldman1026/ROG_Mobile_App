import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FanDetailsPage } from './fan-details.page';

const routes: Routes = [
  {
    path: '',
    component: FanDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FanDetailsPageRoutingModule {}
