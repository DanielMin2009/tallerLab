import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


// Components
import { ButtonComponent } from './button.component';

@NgModule({
  imports: [BrowserModule],
  providers: [],
  declarations: [ButtonComponent],
  exports: [ButtonComponent],
})
export class ButtonModule {}
