import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lab-public-navbar',
  templateUrl: './navbar.component.html',
  host: {
    'class' : 'lab-shell-component lab-navbar'
  },
})
export class PublicNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
