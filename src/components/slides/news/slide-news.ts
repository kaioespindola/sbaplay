import { Component, Input } from '@angular/core';
import { Noticias } from '../../../models/noticias/noticias.interface';

@Component({
  selector: 'slide-news',
  templateUrl: 'slide-news.html'
})
export class SlideNewsComponent {

  @Input() noticias: Array<any>;

  constructor() {
  }

  ngOnInit(): void {
    
  }

}
