import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from "@angular/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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
    HttpModule,
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
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StorageProvider,
    ChannelsProvider,
    NoticiasProvider,
    LeiloesProvider,
    ProgramacaoProvider
  ]
})
export class AppModule {}
