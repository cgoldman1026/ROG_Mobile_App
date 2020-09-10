import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RewardProgressPage } from './reward-progress.page';

const routes: Routes = [
  {
    path: '',
    component: RewardProgressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RewardProgressPageRoutingModule {}
