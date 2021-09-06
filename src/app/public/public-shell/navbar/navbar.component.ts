import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lab-public-navbar-component',
  templateUrl: './navbar.component.html',
  host: {
    'class' : 'lab-shell-component lab-navbar'
  },
})
export class LabPublicNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
