import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


// Shell Components
import { LabPublicHeaderComponent } from './header.component';

// Shared
import { LabLogoModule } from '../../../shared/components/logo/logo.module';
import { LabPublicNavbarModule } from '../navbar/navbar.module';

@NgModule({
  imports: [BrowserModule, LabLogoModule, LabPublicNavbarModule],
  providers: [],
  declarations: [LabPublicHeaderComponent],
  exports: [LabPublicHeaderComponent],
})
export class LabPublicHeaderModule {}
