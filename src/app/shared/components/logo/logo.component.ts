import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'lab-logo-component',
  templateUrl: './logo.component.html',
})
export class LabLogoComponent {

  @HostBinding('class') className = 'lab-component lab-logo';

}
