import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampaignPINNumberPage } from './campaign-pin-number.page';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: CampaignPINNumberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CampaignPINNumberPageRoutingModule {}
