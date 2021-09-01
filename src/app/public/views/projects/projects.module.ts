import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProjectsViewComponent } from './projects.component';

// Components

@NgModule({
  imports: [BrowserModule],
  providers: [],
  declarations: [
    ProjectsViewComponent,
  ],
  exports: [
    ProjectsViewComponent,
  ],
})
export class ProjectsViewModule {}
