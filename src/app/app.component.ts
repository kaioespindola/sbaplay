import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuth } from 'angularfire2/auth';
import { StorageProvider } from '../providers/storage/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage: string;

  constructor(platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private fire: AngularFireAuth,
    private storage: StorageProvider) {
    platform.ready().then(() => {

      statusBar.backgroundColorByHexString('#272F3D');
      statusBar.styleLightContent();
      splashScreen.hide();

      this.storage.checkFirstLogin()
        .then((first: boolean) => {
          first ? this.rootPage = "TutorialPage" : this.rootPage = "BemvindoPage";
        });

	    this.fire.authState.subscribe(user => {
	      if(user && user.email && user.uid) { 
	        this.rootPage = "TabsPage";
	      }
	    })

    });
  }
}