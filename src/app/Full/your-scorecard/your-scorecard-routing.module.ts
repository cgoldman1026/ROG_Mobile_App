import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YourScorecardPage } from './your-scorecard.page';

const routes: Routes = [
  {
    path: '',
    component: YourScorecardPage
  },
  {
    path: 'fan-details',
    loadChildren: () => import('../../Full/your-scorecard/fan-details/fan-details.module').then( m => m.FanDetailsPageModule)
  },
  {
    path: 'donation-details',
    loadChildren: () => import('../../Full/your-scorecard/donation-details/donation-details.module').then( m => m.DonationDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YourScorecardPageRoutingModule {}
