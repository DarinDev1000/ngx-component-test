import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-button',
  template: `
    <p>
      button works!
    </p>
  `,
  styles: []
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
