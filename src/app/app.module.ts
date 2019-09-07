import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from "@angular/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativeStorage } from '@ionic-native/native-storage';
import { Facebook } from '@ionic-native/facebook';

import { Constants } from './app.constants';
import { BrMaskerModule } from 'brmasker-ionic-3';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';

import { StorageProvider } from '../providers/storage/storage';
import { ChannelsProvider } from '../providers/channels/channels';
import { NoticiasProvider } from '../providers/noticias/noticias';
import { LeiloesProvider } from '../providers/leiloes/leiloes';
import { ProgramacaoProvider } from '../providers/programacao/programacao';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: ''
    }),
    AngularFireModule.initializeApp(Constants.FIREBASE_AUTH),
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
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NativeStorage,
    StorageProvider,
    ChannelsProvider,
    NoticiasProvider,
    LeiloesProvider,
    ProgramacaoProvider
  ]
})
export class AppModule {}
