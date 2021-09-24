import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'lab-projects-view-component',
  templateUrl: './projects.component.html',
})
export class LabProjectsViewComponent implements OnInit {

  @HostBinding('class') className = 'lab-view lab-view-projects';

  constructor() { }

  ngOnInit(): void {
  }

}
