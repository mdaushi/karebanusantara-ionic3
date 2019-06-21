import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PengaturanProvider } from '../../providers/pengaturan/pengaturan';

/**
 * Generated class for the PengaturanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-pengaturan',
  templateUrl: 'pengaturan.html',
})
export class PengaturanPage {

  selectedTheme: String;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private pengaturan: PengaturanProvider) {
                this.pengaturan.getActiveTheme().subscribe(val => this.selectedTheme = val);
  }

  toggleTheme(){
    if(this.selectedTheme == 'light-theme'){
      this.pengaturan.setActiveTheme('dark-theme');

    }else{
      this.pengaturan.setActiveTheme('light-theme');
    }
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PengaturanPage');
  }

}
