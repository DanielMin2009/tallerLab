import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'lab-public-footer-component',
  templateUrl: './footer.component.html',
})
export class LabPublicFooterComponent implements OnInit {

  @HostBinding('class') className = 'lab-shell-component lab-footer';

  constructor() { }

  ngOnInit(): void {
  }

}
