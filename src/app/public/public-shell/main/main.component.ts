import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'lab-public-main-component',
  templateUrl: './main.component.html',
})
export class LabPublicMainComponent implements OnInit {

  @HostBinding('class') className = 'lab-shell-component lab-main';

  constructor() { }

  ngOnInit(): void {
  }

}
