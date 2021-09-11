import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


// Components
import { LabButtonComponent } from './button.component';

@NgModule({
  imports: [BrowserModule],
  providers: [],
  declarations: [LabButtonComponent],
  exports: [LabButtonComponent],
})
export class LabButtonModule {}
