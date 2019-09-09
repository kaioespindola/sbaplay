import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fullscreen-slide',
  templateUrl: 'fullscreen-slide.html'
})
export class FullscreenSlideComponent {

  @Input() title: string;
  @Input() subTitle: string;
  @Input() bgImg: string;
  @Input() button: boolean;

  @Output() clickButton: EventEmitter<boolean> = new EventEmitter();

  constructor() {
  }

  buttonClick() {
    this.clickButton.emit();
  }

}
