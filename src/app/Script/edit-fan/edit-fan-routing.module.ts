import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditFanPage } from './edit-fan.page';

const routes: Routes = [
  {
    path: '',
    component: EditFanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditFanPageRoutingModule {}
