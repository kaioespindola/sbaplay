import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  inicioRoot = 'InicioPage'
  leiloesRoot = 'LeiloesPage'
  noticiasRoot = 'NoticiasPage'
  programacaoRoot = 'ProgramacaoPage'
  perfilRoot = 'PerfilPage'

  constructor(public navCtrl: NavController) {}

}