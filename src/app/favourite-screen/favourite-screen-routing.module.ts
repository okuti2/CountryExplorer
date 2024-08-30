import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavouriteScreenPage } from './favourite-screen.page';

const routes: Routes = [
  {
    path: '',
    component: FavouriteScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavouriteScreenPageRoutingModule {}
