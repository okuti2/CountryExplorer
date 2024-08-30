import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Preferences } from '@capacitor/preferences';
import { ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { ViewWillEnter } from '@ionic/angular';



import Country from '../models/Country';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.page.html',
  styleUrls: ['./country-details.page.scss'],
})
export class CountryDetailsPage implements OnInit, ViewWillEnter {

  code: string = '';
  country: Country = {
    name: '',
    flag: '',
    alpha3Code: '',
    capital: '',
    population: 0
  };

  constructor(private route: ActivatedRoute,
    private http:HttpClient,
    private toastController: ToastController,
  ) { 
    this.route.queryParams.subscribe((params) => {
      if (params) {
        if ('alpha3Code' in params) {
          console.log('alpha3Code is present');
          this.code = JSON.parse(params['alpha3Code']);
          console.log('ALPHA3CODE', this.code);
        }
      }
    });
    this.getCountry();
  }

  ngOnInit() { 
  }

  async ionViewWillEnter() {
    if (this.code) {
      this.getCountry(); // Ensure code is not empty
    }
  }


  async getCountry() {
    try {
      // 1. define the api endpoint
      const URL = "https://restcountries.com/v2/alpha/" + this.code;
      
      // 2. connect to it and get response
      const response:Country = await lastValueFrom(this.http.get<Country>(URL))       
      // 3. set the digimon class property to the list retrieved from the URL
      this.country = response

      console.log('Country', this.country);

    } catch(e) {
      // 4. handle error
      console.log("Error when executing getDigimon()")
      console.log(e)
    }
  }

  async addToFavourites(alpha3Code: string) {

    console.log(`The row was clicked: ${alpha3Code}`);
    // 1. get the clicked digimon
    // 2. add it to the key-value storage
    try {
      const result = await Preferences.get({ key: 'COUNTRY_FAVOURITES' });
      let countryList = result.value ? JSON.parse(result.value) : [];

      if(!countryList.includes(alpha3Code)) {
        countryList.push(alpha3Code);

        await Preferences.set({
          key: 'COUNTRY_FAVOURITES',
          value: JSON.stringify(countryList),
        });
      
        // display a toast
        const toast = await this.toastController.create({
          message: `Save success!`,
          duration: 1500,
          position: 'bottom',
        });
        await toast.present();
      } else{
        const toast = await this.toastController.create({
          message: `This country is already on the favourites list!`,
          duration: 1500,
          position: 'bottom',
        });

        await toast.present();
      }
    } catch (e) {
      console.log(e);
    }
  }

}
