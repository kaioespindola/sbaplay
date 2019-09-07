import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
})
export class TutorialPage {

  constructor(public navCtrl: NavController) {
  }

  iniciar() {
    this.navCtrl.setRoot("BemvindoPage", null, {
      animate: true,
      direction: 'forward'
    });
  }
}