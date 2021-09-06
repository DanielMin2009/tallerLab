import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { LabPublicMainComponent } from './main.component';

@NgModule({
  imports: [BrowserModule],
  providers: [],
  declarations: [
    LabPublicMainComponent,
  ],
  exports: [
    LabPublicMainComponent,
  ],
})
export class LabPublicMainModule {}
