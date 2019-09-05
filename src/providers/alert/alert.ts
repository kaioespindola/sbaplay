import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Injectable()
export class AlertProvider {

  constructor(private alert: AlertController) {
  }

  showAlert(titulo: string, mensagem: string) {
    this.alert.create({
      title: titulo,
      subTitle: mensagem,
      buttons: ['Ok']
    }).present();
  }

}
