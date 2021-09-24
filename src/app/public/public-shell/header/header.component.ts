import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'lab-public-header-component',
  templateUrl: './header.component.html',
})
export class LabPublicHeaderComponent implements OnInit {

  @HostBinding('class') className = 'lab-shell-component lab-header';

  constructor() { }

  ngOnInit(): void {
  }

}
