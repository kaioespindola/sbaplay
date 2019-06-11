import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from "@angular/http";
import { BrMaskerModule } from 'brmasker-ionic-3';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Facebook } from '@ionic-native/facebook';
import { Push } from '@ionic-native/push';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

const firebaseAuth = {

  apiKey: "AIzaSyAD9vz03cO7LmKErvX5fDExkQXIFpHipyM",
  authDomain: "sba-play.firebaseapp.com",
  databaseURL: "https://sba-play.firebaseio.com",
  projectId: "sba-play",
  storageBucket: "sba-play.appspot.com",
  messagingSenderId: "164610122617"

};

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: ''
    }),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    HttpModule,
    BrMaskerModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    Push,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
