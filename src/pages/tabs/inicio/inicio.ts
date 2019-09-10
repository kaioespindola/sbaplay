import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import "rxjs/add/operator/map";

import { Animations } from '../../../app/app.animations';
import { Canais } from '../../../models/canais/canais.interface';
import { Noticias } from '../../../models/noticias/noticias.interface';
import { Leiloes } from '../../../models/leiloes/leiloes.interface';
import { ChannelsProvider } from '../../../providers/channels/channels';
import { NoticiasProvider } from '../../../providers/noticias/noticias';
import { LeiloesProvider } from '../../../providers/leiloes/leiloes';

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
  animations: [
    Animations.loadList(),
    Animations.fadeIn(550)
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
      return canal.id !== 3 && canal.id !==5;
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
