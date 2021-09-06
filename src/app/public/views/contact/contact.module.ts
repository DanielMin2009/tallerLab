import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { LabContactViewComponent } from './contact.component';

@NgModule({
  imports: [BrowserModule],
  providers: [],
  declarations: [
    LabContactViewComponent,
  ],
  exports: [
    LabContactViewComponent,
  ],
})
export class LabContactViewModule {}
