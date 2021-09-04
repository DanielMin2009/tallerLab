import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modules
import { LabRoutingModule } from 'src/app/lab-routing.module';

// Components
import { PublicNavbarComponent } from './navbar.component';

@NgModule({
  imports: [BrowserModule, LabRoutingModule],
  providers: [],
  declarations: [
    PublicNavbarComponent,
  ],
  exports: [
    PublicNavbarComponent,
  ],
})
export class PublicNavbarModule {}
