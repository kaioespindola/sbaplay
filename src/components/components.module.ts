import { NgModule} from '@angular/core';
import { PlayerComponent } from './player/player';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { FullscreenSlideComponent } from './slides/fullscreen/fullscreen-slide';
@NgModule({
	declarations: [PlayerComponent,
    FullscreenSlideComponent],
	imports: [
		IonicModule,
		CommonModule
	],
	exports: [PlayerComponent,
    FullscreenSlideComponent]
})
export class ComponentsModule {}
