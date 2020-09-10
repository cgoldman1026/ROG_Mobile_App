import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmCampaignPage } from './confirm-campaign.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmCampaignPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmCampaignPageRoutingModule {}
