import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'lab-button',
  templateUrl: './button.component.html',
})
export class LabButtonComponent {

  @HostBinding('class') className = 'lab-component lab-button';

}
