import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { PublicShellComponent } from './public-shell.component';

// Modules
import { PublicFooterModule } from './footer/footer.module';
import { PublicHeaderModule } from './header/header.module';
import { PublicNavbarModule } from './navbar/navbar.module';
import { PublicMainModule } from './main/main.module';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Modules
    PublicFooterModule,
    PublicHeaderModule,
    PublicMainModule,
    PublicNavbarModule,
  ],
  providers: [],
  declarations: [PublicShellComponent],
  exports: [
    PublicShellComponent,
    PublicFooterModule,
    PublicHeaderModule,
    PublicMainModule,
    PublicNavbarModule,
  ],
})
export class PublicShellModule {}
