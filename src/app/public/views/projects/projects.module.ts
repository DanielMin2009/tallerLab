import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LabProjectsViewComponent } from './projects.component';

// Components

@NgModule({
  imports: [BrowserModule],
  providers: [],
  declarations: [
    LabProjectsViewComponent,
  ],
  exports: [
    LabProjectsViewComponent,
  ],
})
export class LabProjectsViewModule {}
