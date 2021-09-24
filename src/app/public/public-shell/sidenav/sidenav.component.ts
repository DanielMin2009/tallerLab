import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'lab-public-sidenav-component',
  templateUrl: './sidenav.component.html',
})
export class LabPublicSidenavComponent implements OnInit {

  @HostBinding('class') className = 'lab-shell-component lab-sidenav';

  constructor() { }

  ngOnInit(): void {
  }

}
