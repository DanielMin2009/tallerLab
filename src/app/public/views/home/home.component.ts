import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
@Component({
  selector: 'lab-home-view-component',
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabHomeViewComponent {

  @HostBinding('class') className = 'lab-view-component lab-home-view-component';

}
