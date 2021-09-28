import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'lab-public-footer-component',
  templateUrl: './footer.component.html',
})
export class LabPublicFooterComponent implements OnInit {

  @HostBinding('class') className = 'lab-component lab-public-footer-component';

  constructor() { }

  ngOnInit(): void {
  }

}
