import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lab-home-view',
  templateUrl: './home.component.html',
  host: {
    'class' : 'lab-view lab-view-home'
  },
})
export class HomeViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
