import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Shell
import { LabPublicShellModule } from './public/public-shell/public-shell.module';

// Views
import { LabAboutViewModule } from './public/views/about/about.module';
import { LabContactViewModule } from './public/views/contact/contact.module';
import { LabHomeViewModule } from './public/views/home/home.module';
import { LabProjectsViewModule } from './public/views/projects/projects.module';

// Shared

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Public
    LabPublicShellModule,
    // Views
    LabAboutViewModule,
    LabContactViewModule,
    LabHomeViewModule,
    LabProjectsViewModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
