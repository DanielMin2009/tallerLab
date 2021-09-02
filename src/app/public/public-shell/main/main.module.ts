import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { PublicMainComponent } from './main.component';

@NgModule({
  imports: [BrowserModule],
  providers: [],
  declarations: [
    PublicMainComponent,
  ],
  exports: [
    PublicMainComponent,
  ],
})
export class PublicMainModule {}
