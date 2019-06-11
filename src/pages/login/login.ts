import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('username') user;
  @ViewChild('password') password;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private fire: AngularFireAuth,
    private AlertCtrl: AlertController) {
  }

  alert(message: string) {

    this.AlertCtrl.create({
      subTitle: message,
      buttons: ['Ok']
    }).present();
  }

  logar() {

    this.fire.auth.signInWithEmailAndPassword(this.user.value, this.password.value)
    .then(data => {
      console.log('Logado com Sucesso!');
      this.navCtrl.setRoot("TabsPage");
    })
    .catch( error => {
      this.alert(error.message);
    })
  }

}
