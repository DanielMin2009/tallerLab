import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modules
import { AppRoutingModule } from 'src/app/app-routing.module';

// Components
import { LabPublicSidenavComponent } from './sidenav.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  declarations: [
    LabPublicSidenavComponent,
  ],
  exports: [
    LabPublicSidenavComponent,
  ],
})
export class LabPublicSidenavModule {}
