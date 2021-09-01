import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { AboutViewComponent } from './about.component';

@NgModule({
  imports: [BrowserModule],
  providers: [],
  declarations: [
    AboutViewComponent,
  ],
  exports: [
    AboutViewComponent,
  ],
})
export class AboutViewModule {}
