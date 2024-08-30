import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CountryDetailsPageRoutingModule } from './country-details-routing.module';

import { CountryDetailsPage } from './country-details.page';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CountryDetailsPageRoutingModule,
    HttpClientModule
  ],
  declarations: [CountryDetailsPage]
})
export class CountryDetailsPageModule {}
