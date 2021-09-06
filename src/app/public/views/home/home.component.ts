import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lab-home-view-component',
  templateUrl: './home.component.html',
  host: {
    'class' : 'lab-view lab-view-home'
  },
})
export class LabHomeViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
