import { NgModule} from '@angular/core';
import { PlayerComponent } from './player/player';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';
@NgModule({
	declarations: [PlayerComponent],
	imports: [
		IonicModule,
		CommonModule
	],
	exports: [PlayerComponent]
})
export class ComponentsModule {}
