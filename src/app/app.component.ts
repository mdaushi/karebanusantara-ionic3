import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ApiProvider } from '../providers/api/api';
import { KategoriPage } from '../pages/kategori/kategori';
import { AboutPage } from '../pages/about/about';
import { PengaturanPage } from '../pages/pengaturan/pengaturan';
import { PengaturanProvider } from '../providers/pengaturan/pengaturan';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  selectedTheme: String;
  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              public api: ApiProvider,
              private pengaturan: PengaturanProvider) {
    this.pengaturan.getActiveTheme().subscribe(val => this.selectedTheme = val);
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.api.getCategories();
      //this.statusBar.styleDefault(); 
      //this.statusBar.styleLightContent(); //statusbar fix
      this.splashScreen.hide();
      if (this.platform.is('android')) {
        this.statusBar.backgroundColorByHexString("#33000000");
      } //statusnar transparans
    });
  }

  openPage(cat_id:number = 0) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(HomePage, {cat_id:cat_id});
  }
  openKategori(){
    this.nav.push(KategoriPage);
  }
  openAbout(){
    this.nav.setRoot(AboutPage);
  }
  openPengaturan(){
    this.nav.setRoot(PengaturanPage);
  }
}
