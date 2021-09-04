import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lab-public-header',
  templateUrl: './header.component.html',
  host: {
    'class' : 'lab-shell-component lab-header'
  },
})
export class PublicHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
