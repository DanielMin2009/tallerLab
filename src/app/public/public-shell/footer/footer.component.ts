import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lab-public-footer',
  templateUrl: './footer.component.html',
  host: {
    'class' : 'lab-shell-component lab-footer'
  },
})
export class PublicFooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
