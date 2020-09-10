import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PickYourRewardPage } from './pick-your-reward.page';

const routes: Routes = [
  {
    path: '',
    component: PickYourRewardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PickYourRewardPageRoutingModule {}
