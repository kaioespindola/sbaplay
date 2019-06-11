import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private fire: AngularFireAuth) {
    platform.ready().then(() => {

      statusBar.backgroundColorByHexString('#272F3D');
      statusBar.styleLightContent();
      splashScreen.hide();

	    this.fire.authState.subscribe(user => {
	      if(user && user.email && user.uid) { 
	        this.rootPage = "TabsPage";
	      }
	      else {
	      	this.rootPage = "TutorialPage";
	      }
	    })

    });
  }
}