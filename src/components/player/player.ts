import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'player',
  templateUrl: 'player.html'
})
export class PlayerComponent {

  @Input() url: string;

  loading: boolean = true;
  playerUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
      this.playerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    },1000)
  }

}
