import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lab-button',
  templateUrl: './button.component.html',
  host: {
    'class' : 'lab-component lab-button'
  },
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
