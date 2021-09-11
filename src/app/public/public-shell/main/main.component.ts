import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lab-public-main-component',
  templateUrl: './main.component.html',
  host: {
    'class' : 'lab-shell-component lab-main'
  },
})
export class LabPublicMainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
