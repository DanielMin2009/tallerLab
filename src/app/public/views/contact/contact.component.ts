import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  selector: 'lab-contact-view-component',
  templateUrl: './contact.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabContactViewComponent {

  @HostBinding('class') className = 'lab-view-component lab-contact-view-component';

}
