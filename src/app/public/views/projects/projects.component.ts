import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  selector: 'lab-projects-view-component',
  templateUrl: './projects.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabProjectsViewComponent {

  @HostBinding('class') className = 'lab-view-component lab-projects-view-component';

}
