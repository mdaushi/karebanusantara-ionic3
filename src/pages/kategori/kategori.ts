import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { HomePage } from '../home/home';

/**
 * Generated class for the KategoriPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-kategori',
  templateUrl: 'kategori.html',
})
export class KategoriPage {
 
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public api : ApiProvider) {

  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad KategoriPage');
  }
  openPage(cat_id:number = 0) {
    this.navCtrl.push(HomePage, {cat_id:cat_id});
  }

}
