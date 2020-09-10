import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YourProfilePage } from './your-profile.page';

const routes: Routes = [
  {
    path: '',
    component: YourProfilePage
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('../../Full/your-profile/edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YourProfilePageRoutingModule {}
