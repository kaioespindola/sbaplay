import { NgModule} from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';

import { PlayerComponent } from './player/player';

import { FullscreenSlideComponent } from './slides/fullscreen/fullscreen-slide';
import { SlideNewsComponent } from './slides/news/slide-news';

import { TitleComponent } from './ui/title/title';

@NgModule({
	declarations: [
		PlayerComponent,
		FullscreenSlideComponent,
    	SlideNewsComponent,
    	TitleComponent
	],
	imports: [
		IonicModule,
		CommonModule
	],
	exports: [
		PlayerComponent,
		FullscreenSlideComponent,
    	SlideNewsComponent,
    	TitleComponent
	]
})
export class ComponentsModule {}
