import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

@IonicPage()
@Component({
  selector: 'page-noticia',
  templateUrl: 'noticia.html',
})
export class NoticiaPage {

  item:any;

  texto:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public sanitizer:DomSanitizer) {

  	this.item = navParams.get('item');

    this.texto = this.sanitizer.bypassSecurityTrustHtml(this.item.text);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoticiaPage');
  }

}
