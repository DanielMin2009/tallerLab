import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'lab-public-shell',
  templateUrl: './public-shell.component.html',
  animations: [
      trigger('routeAnimation', [
      ])
    ]
  
})
export class LabPublicShellComponent  {  

  goToView(outlet: RouterOutlet) {
    if (outlet.isActivated) return outlet.activatedRoute.snapshot.url;
  }

}
