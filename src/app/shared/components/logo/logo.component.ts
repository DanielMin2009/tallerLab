import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lab-logo-component',
  templateUrl: './logo.component.html',
  host: {
    'class' : 'lab-component lab-logo'
  },
})
export class LabLogoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
