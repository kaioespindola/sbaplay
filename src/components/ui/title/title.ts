import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-title',
  template: `
    <h1>{{ title }}</h1>
    <p>{{ subTitle }}</p>
  `
})
export class TitleComponent {

  @Input() title: string;
  @Input() subTitle: string;

  constructor() {
  }

}
