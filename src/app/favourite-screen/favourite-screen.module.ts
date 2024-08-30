import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavouriteScreenPageRoutingModule } from './favourite-screen-routing.module';

import { FavouriteScreenPage } from './favourite-screen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavouriteScreenPageRoutingModule
  ],
  declarations: [FavouriteScreenPage]
})
export class FavouriteScreenPageModule {}
