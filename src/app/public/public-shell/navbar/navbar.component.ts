import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'lab-public-navbar-component',
  templateUrl: './navbar.component.html',
})
export class LabPublicNavbarComponent implements OnInit {

  @HostBinding('class') className = 'lab-shell-component lab-navbar';

  constructor() { }

  ngOnInit(): void {
  }

}
