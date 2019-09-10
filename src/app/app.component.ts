import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StorageProvider } from '../providers/storage/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage: string;

  constructor(platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private storage: StorageProvider) {
    platform.ready().then(() => {

      statusBar.backgroundColorByHexString('#272F3D');
      statusBar.styleLightContent();
      splashScreen.hide();

      this.storage.checkFirstLogin()
        .then((first: boolean) => {
          first ? this.rootPage = "TutorialPage" : this.rootPage = "TabsPage";
        })

    })
  }
}