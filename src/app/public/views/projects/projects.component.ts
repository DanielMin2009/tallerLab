import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lab-projects-view-component',
  templateUrl: './projects.component.html',
  host: {
    'class' : 'lab-view lab-view-projects'
  },
})
export class LabProjectsViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
