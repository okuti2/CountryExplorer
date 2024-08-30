import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'country-details',
    loadChildren: () => import('./country-details/country-details.module').then( m => m.CountryDetailsPageModule)
  },
  {
    path: 'favourite-screen',
    loadChildren: () => import('./favourite-screen/favourite-screen.module').then( m => m.FavouriteScreenPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
