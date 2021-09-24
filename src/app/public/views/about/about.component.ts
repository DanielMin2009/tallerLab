import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'lab-about-view-component',
  templateUrl: './about.component.html',
})
export class LabAboutViewComponent implements OnInit {

  @HostBinding('class') className = 'lab-view lab-view-about';

  constructor() { }

  ngOnInit(): void {
  }

}
