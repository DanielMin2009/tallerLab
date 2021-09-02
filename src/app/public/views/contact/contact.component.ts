import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact.component.html',
  host: {
    'class' : 'lab-view lab-view-contact'
  },
})
export class ContactViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
