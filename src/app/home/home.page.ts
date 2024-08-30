import { Component } from '@angular/core';
import Country from '../models/Country';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { Preferences } from '@capacitor/preferences';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  countryList:Country[] = []

  constructor(private http:HttpClient,
    private toastController: ToastController,
    private router: Router
  ) { 
  }

  ngOnInit() {
    // api requests
    this.getCountry()
  }

  async getCountry() {
    try {
      // 1. define the api endpoint
      const URL = "https://restcountries.com/v2/all" 
      
      // 2. connect to it and get response
      const response:Country[] = await lastValueFrom(this.http.get<Country[]>(URL))       
      // 3. set the digimon class property to the list retrieved from the URL
      this.countryList = response

    } catch(e) {
      // 4. handle error
      console.log("Error when executing getDigimon()")
      console.log(e)
    }
  }

  async rowPressed(e: any, selectedCountry: string) {
    console.log('Row pressed');
    console.log(selectedCountry);

    this.router.navigate(['/country-details'],  {
      queryParams :{ 
        alpha3Code: JSON.stringify(selectedCountry),
      },
    });
  }


}
