import { Component, OnInit } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { ViewWillEnter } from '@ionic/angular';


@Component({
  selector: 'app-favourite-screen',
  templateUrl: './favourite-screen.page.html',
  styleUrls: ['./favourite-screen.page.scss'],
})
export class FavouriteScreenPage implements OnInit, ViewWillEnter {
  favouritesList: string[] = [];

  constructor() { }

  async ionViewWillEnter() {
    try {
      let results = await Preferences.get({ key: 'COUNTRY_FAVOURITES' });
      if (results.value === null) {
       // console.log('This key does not exist');
        this.favouritesList = [];
        return;
      }
      this.favouritesList = JSON.parse(results.value);
    } catch (e) {
      console.log(e);
    }
  }

  async ngOnInit() {
    
  }

  async deleteAllFavourites() { 
    try {
      await Preferences.remove({ key: 'COUNTRY_FAVOURITES' });
      this.favouritesList = [];
    } catch (e) {
      console.log(e);
    }
  }

  async deleteFavourite(code: string) {
   // console.log('Favourites List before delete', this.favouritesList);
    try {
      await Preferences.remove({ key: 'COUNTRY_FAVOURITES' });
      let index = this.favouritesList.indexOf(code);
      if (index > -1) {
        this.favouritesList.splice(index, 1);
       // console.log('Favourites List after delete', this.favouritesList);
      }
      await Preferences.set({ key: 'COUNTRY_FAVOURITES', value: JSON.stringify(this.favouritesList) });
    } catch (e) {
      console.log(e);
    }
  }

}
