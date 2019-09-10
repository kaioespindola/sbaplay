import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { ProgramacaoProvider } from '../../../providers/programacao/programacao';
import { Canais } from '../../../models/canais/canais.interface';
import { Programacao } from '../../../models/programacao/programacao.interface';

@IonicPage()
@Component({
  selector: 'page-assistir',
  templateUrl: 'assistir.html',
})
export class AssistirPage {

  private channel: Canais;
  public agora: Programacao;
  public depois: Programacao;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private sanitizer: DomSanitizer,
    private programacaoProvider: ProgramacaoProvider) {

    this.channel = navParams.get('channel');
  }

  programacao() {
    this.programacaoProvider.programacaoAgora(this.channel.slug)
      .then((agora: Array<Programacao>) => {
        this.agora = agora[0];
      });
    this.programacaoProvider.programacaoDepois(this.channel.slug)
      .then((depois: Array<Programacao>) => {
        this.depois = depois[0];
      });
  }

  ionViewDidLoad() {
    this.programacao();
  }

}
