import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AssistirPage } from './assistir';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    AssistirPage,
  ],
  imports: [
    IonicPageModule.forChild(AssistirPage),
    ComponentsModule
  ],
})
export class AssistirPageModule {}
