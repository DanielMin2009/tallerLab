import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lab-about-view',
  templateUrl: './about.component.html',
  host: {
    'class' : 'lab-view lab-view-about'
  },
})
export class AboutViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
