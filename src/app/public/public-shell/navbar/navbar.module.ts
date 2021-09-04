import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modules
import { AppRoutingModule } from 'src/app/app-routing.module';

// Components
import { PublicNavbarComponent } from './navbar.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  declarations: [
    PublicNavbarComponent,
  ],
  exports: [
    PublicNavbarComponent,
  ],
})
export class PublicNavbarModule {}
