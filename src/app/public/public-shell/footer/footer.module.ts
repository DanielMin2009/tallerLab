import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { LabPublicFooterComponent } from './footer.component';

@NgModule({
  imports: [BrowserModule],
  providers: [],
  declarations: [
    LabPublicFooterComponent,
  ],
  exports: [
    LabPublicFooterComponent,
  ],
})
export class LabPublicFooterModule {}
