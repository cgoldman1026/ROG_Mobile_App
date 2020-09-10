import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShareCampaignPage } from './share-campaign.page';

const routes: Routes = [
  {
    path: '',
    component: ShareCampaignPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShareCampaignPageRoutingModule {}
