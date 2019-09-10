import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

@IonicPage()
@Component({
  selector: 'page-leilao',
  templateUrl: 'leilao.html',
})
export class LeilaoPage {

  item: any;

  video: any;

  videoID: any;
  trustedVideoUrl: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public sanitizer:DomSanitizer) {

    this.item = navParams.get('item');

    if(this.item.grandescriatorios) {

      var regex = new RegExp(/(?:\?v=)([^&]+)(?:\&)*/);
      var url = this.item.grandescriatorios;
      var matches = regex.exec(url);
  
      this.videoID = "https://www.youtube.com/embed/" + matches[1];
  
      this.trustedVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoID);
    }
  
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeilaoPage');
  }

}
