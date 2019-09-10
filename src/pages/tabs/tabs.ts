import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  inicioRoot: string = 'InicioPage'
  leiloesRoot: string = 'LeiloesPage'
  noticiasRoot: string = 'NoticiasPage'
  programacaoRoot: string = 'ProgramacaoPage'

  constructor() {}

}
