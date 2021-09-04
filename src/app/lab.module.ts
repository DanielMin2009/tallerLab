import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LabRoutingModule } from './lab-routing.module';
import { LabComponent } from './lab.component';

// Shell
import { PublicShellModule } from './public/public-shell/public-shell.module';

// Views
import { AboutViewModule } from './public/views/about/about.module';
import { ContactViewModule } from './public/views/contact/contact.module';
import { HomeViewModule } from './public/views/home/home.module';
import { ProjectsViewModule } from './public/views/projects/projects.module';

// Shared

@NgModule({
  declarations: [
    LabComponent,
  ],
  imports: [
    BrowserModule,
    LabRoutingModule,
    // Public
    PublicShellModule,
    // Views
    AboutViewModule,
    ContactViewModule,
    HomeViewModule,
    ProjectsViewModule,
  ],
  providers: [],
  bootstrap: [LabComponent]
})
export class LabModule { }
