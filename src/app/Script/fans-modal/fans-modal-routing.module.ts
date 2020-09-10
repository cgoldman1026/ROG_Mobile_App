import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FansModalPage } from './fans-modal.page';

const routes: Routes = [
  {
    path: '',
    component: FansModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FansModalPageRoutingModule {}
