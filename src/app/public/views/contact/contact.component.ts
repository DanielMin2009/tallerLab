import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lab-contact-view-component',
  templateUrl: './contact.component.html',
  host: {
    'class' : 'lab-view lab-view-contact'
  },
})
export class LabContactViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
