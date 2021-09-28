import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'lab-public-header-component',
  templateUrl: './header.component.html',
})
export class LabPublicHeaderComponent implements OnInit {

  @HostBinding('class') className = 'lab-component lab-public-header-component';

  constructor() { }

  ngOnInit(): void {
  }

}
