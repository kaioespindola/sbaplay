import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LeiloesPage } from './leiloes';

@NgModule({
  declarations: [
    LeiloesPage,
  ],
  imports: [
    IonicPageModule.forChild(LeiloesPage),
  ],
})
export class LeiloesPageModule {}
