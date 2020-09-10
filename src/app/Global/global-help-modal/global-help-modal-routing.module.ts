import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GlobalHelpModalPage } from './global-help-modal.page';

const routes: Routes = [
  {
    path: '',
    component: GlobalHelpModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GlobalHelpModalPageRoutingModule {}
