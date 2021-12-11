import { Component, HostBinding, OnInit } from '@angular/core';
@Component({
  selector: 'lab-about-view-component',
  templateUrl: './about.component.html',
})
export class LabAboutViewComponent {

  @HostBinding('class') className = 'lab-view-component lab-about-view-component';

}
