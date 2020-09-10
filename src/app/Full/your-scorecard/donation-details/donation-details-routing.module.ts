import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonationDetailsPage } from './donation-details.page';

const routes: Routes = [
  {
    path: '',
    component: DonationDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonationDetailsPageRoutingModule {}
