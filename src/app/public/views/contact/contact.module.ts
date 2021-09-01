import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { ContactViewComponent } from './contact.component';

@NgModule({
  imports: [BrowserModule],
  providers: [],
  declarations: [
    ContactViewComponent,
  ],
  exports: [
    ContactViewComponent,
  ],
})
export class ContactViewModule {}
