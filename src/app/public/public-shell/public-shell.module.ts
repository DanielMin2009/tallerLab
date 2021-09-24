import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Routing
import { AppRoutingModule } from 'src/app/app-routing.module';

// Components
import { LabPublicShellComponent } from './public-shell.component';

// Modules
import { LabPublicFooterModule } from './footer/footer.module';
import { LabPublicHeaderModule } from './header/header.module';
import { LabPublicNavbarModule } from './navbar/navbar.module';
import { LabPublicMainModule } from './main/main.module';
import { LabPublicSidenavModule } from './sidenav/sidenav.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Modules
    LabPublicFooterModule,
    LabPublicHeaderModule,
    LabPublicMainModule,
    LabPublicNavbarModule,
    LabPublicSidenavModule,
  ],
  providers: [],
  declarations: [LabPublicShellComponent],
  exports: [
    LabPublicShellComponent,
    LabPublicFooterModule,
    LabPublicHeaderModule,
    LabPublicMainModule,
    LabPublicNavbarModule,
    LabPublicSidenavModule,
  ],
})
export class LabPublicShellModule {}
