import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { HomeViewComponent } from './home.component';

@NgModule({
  imports: [BrowserModule],
  providers: [],
  declarations: [
    HomeViewComponent,
  ],
  exports: [
    HomeViewComponent,
  ],
})
export class HomeViewModule {}
