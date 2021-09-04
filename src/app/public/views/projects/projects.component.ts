import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-view',
  templateUrl: './projects.component.html',
  host: {
    'class' : 'lab-view lab-view-projects'
  },
})
export class ProjectsViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
