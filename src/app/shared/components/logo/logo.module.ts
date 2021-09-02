import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


// Components
import { LogoComponent } from './logo.component';

@NgModule({
  imports: [BrowserModule],
  providers: [],
  declarations: [LogoComponent],
  exports: [LogoComponent],
})
export class LogoModule {}
