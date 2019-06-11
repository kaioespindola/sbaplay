import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditarperfilPage } from './editarperfil';
import { BrMaskerModule } from 'brmasker-ionic-3';

@NgModule({
  declarations: [
    EditarperfilPage,
  ],
  imports: [
    IonicPageModule.forChild(EditarperfilPage),
    BrMaskerModule
  ],
  schemas: [
  	CUSTOM_ELEMENTS_SCHEMA 
  ]
})
export class EditarperfilPageModule {}
