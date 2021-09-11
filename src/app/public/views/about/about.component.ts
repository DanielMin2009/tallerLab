import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lab-about-view-component',
  templateUrl: './about.component.html',
  host: {
    'class' : 'lab-view lab-view-about'
  },
})
export class LabAboutViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
