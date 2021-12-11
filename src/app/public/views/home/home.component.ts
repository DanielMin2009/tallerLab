import { Component, HostBinding, OnInit } from '@angular/core';
@Component({
  selector: 'lab-home-view-component',
  templateUrl: './home.component.html',
})
export class LabHomeViewComponent implements OnInit {

  @HostBinding('class') className = 'lab-view-component lab-home-view-component';

  constructor() { }

  ngOnInit(): void {
  }

}
