import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import "rxjs/add/operator/map";
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@IonicPage()
@Component({
  selector: 'page-assistir',
  templateUrl: 'assistir.html',
})
export class AssistirPage {

  private channel: any;

  agoracb = [];
  depoiscb = [];

  agoraac = [];
  depoisac = [];

  agoracm = [];
  depoiscm = [];

  private playercb: any;
  private playerac: any;
  private playercm: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private httpClient: HttpClient,
    private sanitizer: DomSanitizer) {

    this.channel = navParams.get('channel');

    this.playercb = this.sanitizer.bypassSecurityTrustResourceUrl('http://monitor.sba1.com/canaldoboi.php');
  }

  agoracanaldoboi() {
    this.httpClient.get(`https://cors-anywhere.herokuapp.com/http://api.sba1.com/canais/agora/canaldoboi`)
    .subscribe(datacb => {
      this.agoracb = this.agoracb.concat(datacb).map(res => res);
      console.log(this.agoracb);
    })
  }

  depoiscanaldoboi() {
    this.httpClient.get(`https://cors-anywhere.herokuapp.com/http://api.sba1.com/canais/depois/canaldoboi`)
    .subscribe(datacb => {
      this.depoiscb = this.depoiscb.concat(datacb).map(res => res);
      console.log(this.depoiscb);
    })
  }

  agoraagrocanal() {
    this.httpClient.get(`https://cors-anywhere.herokuapp.com/http://api.sba1.com/canais/agora/agrocanal`)
    .subscribe(dataac => {
      this.agoraac = this.agoraac.concat(dataac).map(res => res);
      console.log(this.agoraac);
    })
  }

  depoisagrocanal() {
    this.httpClient.get(`https://cors-anywhere.herokuapp.com/http://api.sba1.com/canais/depois/agrocanal`)
    .subscribe(dataac => {
      this.depoisac = this.depoisac.concat(dataac).map(res => res);
      console.log(this.depoisac);
    })
  }

  agoracinemais() {
    this.httpClient.get(`https://cors-anywhere.herokuapp.com/http://api.sba1.com/canais/agora/cinemais`)
    .subscribe(datacm => {
      this.agoracm = this.agoracm.concat(datacm).map(res => res);
      console.log(this.agoracm);
    })
  }

  depoiscinemais() {
    this.httpClient.get(`https://cors-anywhere.herokuapp.com/http://api.sba1.com/canais/depois/cinemais`)
    .subscribe(datacm => {
      this.depoiscm = this.depoiscm.concat(datacm).map(res => res);
      console.log(this.depoiscm);
    })
  }

  verGrade() {
    this.navCtrl.push("ProgramacaoPage");
  }

  ionViewDidLoad() {

    setTimeout(() => {

      if(this.channel.name === 'Canal do Boi') {

        this.agoracanaldoboi();
        this.depoiscanaldoboi();

      }

      if(this.channel.name === 'Agro Canal') {

        this.agoraagrocanal();
        this.depoisagrocanal();

      }

      if(this.channel.name === 'Cine+') {

        this.agoracinemais();
        this.depoiscinemais();

      }

      
    }, 1000);

  }

}
