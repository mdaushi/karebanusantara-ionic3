import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { LazyLoadImageModule, intersectionObserverPreset } from 'ng-lazyload-image';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApiProvider } from '../providers/api/api';
import { HttpClientModule } from '@angular/common/http';
import { DetailPage } from '../pages/detail/detail';
import { SearchPage } from '../pages/search/search';
import { KategoriPage } from '../pages/kategori/kategori';
import { AboutPage } from '../pages/about/about';
import { PengaturanPage } from '../pages/pengaturan/pengaturan';
import { PengaturanProvider } from '../providers/pengaturan/pengaturan';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailPage,
    SearchPage,
    KategoriPage,
    AboutPage,
    PengaturanPage,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LazyLoadImageModule.forRoot({
      preset: intersectionObserverPreset
    }),
    IonicModule.forRoot(MyApp),
    

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailPage,
    SearchPage,
    KategoriPage,
    AboutPage,
    PengaturanPage,
  
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    PengaturanProvider
  ]
})
export class AppModule {}
