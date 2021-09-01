import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { PublicHeaderComponent } from './header.component';

@NgModule({
  imports: [BrowserModule],
  providers: [],
  declarations: [
    PublicHeaderComponent,
  ],
  exports: [
    PublicHeaderComponent,
  ],
})
export class PublicHeaderModule {}
