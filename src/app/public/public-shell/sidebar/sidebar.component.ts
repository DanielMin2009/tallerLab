import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-sidebar',
  templateUrl: './sidebar.component.html',
  host: {
    'class' : 'lab-shell-component lab-sidebar'
  },
})
export class PublicSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
