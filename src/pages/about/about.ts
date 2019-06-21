import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }
  urlweb(){
    let confirm = this.alertCtrl.create({
      //title: 'Buka Laman?',
      message: 'Buka Laman?',
      buttons: [
        {
          text: 'Tidak',
        },
          {
            text :'Iya',
            handler: () =>{
              window.open("https://karebanusantara.com/", "_system");
            }
          }
      ]
    });
    confirm.present();
  }

}
