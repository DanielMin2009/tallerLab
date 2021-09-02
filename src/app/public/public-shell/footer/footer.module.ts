import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { PublicFooterComponent } from './footer.component';

@NgModule({
  imports: [BrowserModule],
  providers: [],
  declarations: [
    PublicFooterComponent,
  ],
  exports: [
    PublicFooterComponent,
  ],
})
export class PublicFooterModule {}
