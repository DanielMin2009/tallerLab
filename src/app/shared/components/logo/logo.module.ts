import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


// Components
import {LabLogoComponent } from './logo.component';

@NgModule({
  imports: [BrowserModule],
  providers: [],
  declarations: [LabLogoComponent],
  exports: [LabLogoComponent],
})
export class LabLogoModule {}
