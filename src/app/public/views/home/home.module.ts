import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { LabHomeViewComponent } from './home.component';

@NgModule({
  imports: [BrowserModule],
  providers: [],
  declarations: [
    LabHomeViewComponent,
  ],
  exports: [
    LabHomeViewComponent,
  ],
})
export class LabHomeViewModule {}
