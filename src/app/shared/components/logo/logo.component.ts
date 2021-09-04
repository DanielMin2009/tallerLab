import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  host: {
    'class' : 'lab-component lab-logo'
  },
})
export class LogoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
