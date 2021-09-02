import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


// Shell Components
import { PublicHeaderComponent } from './header.component';

// Shared
import { LogoModule } from '../../../shared/components/logo/logo.module';
import { PublicNavbarModule } from '../navbar/navbar.module';

@NgModule({
  imports: [BrowserModule, LogoModule, PublicNavbarModule],
  providers: [],
  declarations: [PublicHeaderComponent],
  exports: [PublicHeaderComponent],
})
export class PublicHeaderModule {}
