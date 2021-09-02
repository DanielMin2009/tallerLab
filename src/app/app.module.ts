import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

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
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Public
    PublicShellModule,
    // Views
    AboutViewModule,
    ContactViewModule,
    HomeViewModule,
    ProjectsViewModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
