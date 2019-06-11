import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { trigger,style,transition,animate,query,stagger} from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import "rxjs/add/operator/map";

import { AssistirService } from '../../app/services/assistir.service';

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
  providers: [AssistirService],
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(-15px)' }),
          stagger('50ms',
          animate('550ms ease-out',
          style({ opacity: 1, transform: 'translateY(0px)'})))
        ], { optional: true }),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
})
export class InicioPage {

  channels: any;

  noticias = [];
  fakeNoticias: Array<any> = new Array(3);

  leiloes = [];
  fakeLeiloes: Array<any> = new Array(3);

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public push: Push,
    private httpClient: HttpClient,
    public assistirService:AssistirService) {

      this.push.hasPermission()
      .then((res: any) => {
    
        if (res.isEnabled) {
  
            const options: PushOptions = {
              android: {
                senderID: "164610122617",
                sound: true,
                icon: 'icon',
                vibrate: true
              },
              ios: {
                  alert: 'true',
                  badge: true,
                  sound: 'false'
              },
              windows: {},
              browser: {
                  pushServiceURL: 'http://push.api.phonegap.com/v1/push'
              }
          };

          const pushObject: PushObject = this.push.init(options);

          pushObject.on('notification').subscribe((notification: any) => {
            alert(notification.message);
          });
        
          pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));
        
          pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));

        } else {
          alert('Não tem permissão');
        }
    
      });

  }

  ngOnInit() {
    this.getCanais();
  }

  getCanais(){
    this.assistirService.getCanais().subscribe(response => {
      this.channels = response;
    });
  }

  assistirCanal(channel) {
    this.navCtrl.push("AssistirPage" , {
      channel:channel
    });
  }

  loadNoticias() {
    this.httpClient.get(`https://cors-anywhere.herokuapp.com/http://api.sba1.com/noticias?page=0&sort=Noticias.date&limit=3&direction=DESC`)
    .subscribe(data => {
      this.noticias = this.noticias.concat(data).map(res => res);
    })
  }

  verNoticia(item) {
    this.navCtrl.push("NoticiaPage" , {
      item:item
    });
  }

  loadLeiloes() {
    this.httpClient.get(`https://cors-anywhere.herokuapp.com/http://api.sba1.com/leiloes?page=0&sort=Leiloes.date&limit=3&direction=ASC`)
    .subscribe(data2 => {
      this.leiloes = this.leiloes.concat(data2).map(res => res);
    })
  }

  verLeilao(item) {
    this.navCtrl.push("LeilaoPage" , {
      item:item
    });
  }

  ionViewDidLoad() {
    // Simulating network latency
    // with a timeout
    setTimeout(() => {
      this.loadNoticias();
      this.loadLeiloes();
    }, 1500);
  }


}
