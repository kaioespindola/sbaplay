import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
})
export class TutorialPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  iniciar() {
    this.navCtrl.setRoot("BemvindoPage", {}, {
      animate: true,
      direction: 'forward'
    });
  }
}