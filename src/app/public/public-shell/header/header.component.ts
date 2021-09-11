import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lab-public-header-component',
  templateUrl: './header.component.html',
  host: {
    'class' : 'lab-shell-component lab-header'
  },
})
export class LabPublicHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
