import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-main',
  templateUrl: './main.component.html',
  host: {
    'class' : 'lab-shell-component lab-main'
  },
})
export class PublicMainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
