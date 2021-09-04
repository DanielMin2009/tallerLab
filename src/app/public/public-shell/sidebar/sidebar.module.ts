import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modules
import { LabRoutingModule } from 'src/app/lab-routing.module';

// Components
import { PublicSidebarComponent } from './sidebar.component';

@NgModule({
  imports: [BrowserModule, LabRoutingModule],
  providers: [],
  declarations: [
    PublicSidebarComponent,
  ],
  exports: [
    PublicSidebarComponent,
  ],
})
export class PublicSidebarModule {}
