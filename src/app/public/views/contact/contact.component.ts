import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'lab-contact-view-component',
  templateUrl: './contact.component.html',
})
export class LabContactViewComponent implements OnInit {

  @HostBinding('class') className = 'lab-view lab-view-contact';

  constructor() { }

  ngOnInit(): void {
  }

}
