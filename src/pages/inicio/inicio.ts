import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { trigger,style,transition,animate,query,stagger} from '@angular/animations';
import "rxjs/add/operator/map";

import { Canais } from '../../models/canais/canais.interface';
import { Noticias } from '../../models/noticias/noticias.interface';
import { Leiloes } from '../../models/leiloes/leiloes.interface';
import { ChannelsProvider } from '../../providers/channels/channels';
import { NoticiasProvider } from '../../providers/noticias/noticias';
import { LeiloesProvider } from '../../providers/leiloes/leiloes';

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
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

  channels: Array<Canais> = [];

  noticias: Array<Noticias> = [];
  fakeNoticias: Array<any> = new Array(1);

  leiloes: Array<Leiloes> = [];
  fakeLeiloes: Array<any> = new Array(1);

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private channelsProvider: ChannelsProvider,
    private noticiasProvider: NoticiasProvider,
    private leiloesProvider: LeiloesProvider) {
  }

  ngOnInit() {
  }

  loadChannels() {
    this.channelsProvider.listChannels().then(canais => this.channels = canais.filter(canal => {
      return canal.id !== 3;
    }));
  }

  loadNoticias(page: string, limit: string) {
    this.noticiasProvider.getNoticias(page, limit).then(noticias => this.noticias = noticias);
  }

  loadLeiloes(page: string, limit: string) {
    this.leiloesProvider.getLeiloes(page, limit).then(leiloes => this.leiloes = leiloes);
  }

  assistirCanal(canal) {
    this.navCtrl.push("AssistirPage" , {
      channel: canal
    });
  }

  verNoticia(item) {
    this.navCtrl.push("NoticiaPage" , {
      item: item
    });
  }

  verLeilao(item) {
    this.navCtrl.push("LeilaoPage" , {
      item: item
    });
  }

  ionViewDidLoad() {
    this.loadChannels();
    this.loadNoticias('0', '3');
    this.loadLeiloes('0', '3');
  }


}
