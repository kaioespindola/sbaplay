import { Component, Input } from '@angular/core';
declare var jwplayer: any;

@Component({
  selector: 'player',
  templateUrl: 'player.html'
})
export class PlayerComponent {

  @Input() url: string;
  @Input() img: string;

  constructor() {
  }

  initPlayer() {
    jwplayer('teste').setup({
      file: `${this.url}`,
      aspectratio:"4:3",
      autostart: true,
      image:`https://sba1.com/webroot/img/canais/${this.img}`,
      mediaid:"Dk85fAbY"
      }
    );
  }

  ngOnInit() {
    this.initPlayer();
  }

}
