import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modules
import { AppRoutingModule } from 'src/app/app-routing.module';

// Components
import { PublicSidebarComponent } from './sidebar.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  declarations: [
    PublicSidebarComponent,
  ],
  exports: [
    PublicSidebarComponent,
  ],
})
export class PublicSidebarModule {}
