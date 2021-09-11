import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lab-public-footer-component',
  templateUrl: './footer.component.html',
  host: {
    'class' : 'lab-shell-component lab-footer'
  },
})
export class LabPublicFooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
