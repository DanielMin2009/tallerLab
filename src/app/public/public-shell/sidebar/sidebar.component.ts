import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lab-public-sidebar-component',
  templateUrl: './sidebar.component.html',
  host: {
    'class' : 'lab-shell-component lab-sidebar'
  },
})
export class LabPublicSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
