import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { PublicNavbarComponent } from './navbar.component';

@NgModule({
  imports: [BrowserModule],
  providers: [],
  declarations: [
    PublicNavbarComponent,
  ],
  exports: [
    PublicNavbarComponent,
  ],
})
export class PublicNavbarModule {}
