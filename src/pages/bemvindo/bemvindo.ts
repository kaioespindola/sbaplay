import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';

import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-bemvindo',
  templateUrl: 'bemvindo.html',
})
export class BemvindoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private facebook: Facebook) {
  }

  login() {
    this.navCtrl.push("LoginPage");
  }

  signup() {
    this.navCtrl.push("RegistrarPage");
  }

  facebooklogin() {

    this.facebook.login(["email"]).then((loginResponse => {

      let credential = firebase.auth.FacebookAuthProvider.credential(loginResponse.authResponse.accessToken);

      firebase.auth().signInWithCredential(credential).then((info) => {

        this.navCtrl.setRoot("TabsPage", {}, {
          animate: true,
          direction: 'forward'
        });
        
      })
    }))

  }

  pular() {
    this.navCtrl.setRoot("TabsPage", {}, {
      animate: true,
      direction: 'forward'
    });
  }

}
