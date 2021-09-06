import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { LabAboutViewComponent } from './about.component';

@NgModule({
  imports: [BrowserModule],
  providers: [],
  declarations: [
    LabAboutViewComponent,
  ],
  exports: [
    LabAboutViewComponent,
  ],
})
export class LabAboutViewModule {}
