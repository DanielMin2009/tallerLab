import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
@Component({
  selector: 'lab-about-view-component',
  templateUrl: './about.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabAboutViewComponent {

  @HostBinding('class') className = 'lab-view-component lab-about-view-component';

}
