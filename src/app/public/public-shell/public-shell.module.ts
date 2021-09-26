import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Routing
import { AppRoutingModule } from 'src/app/app-routing.module';

// Components
import { LabPublicShellComponent } from './public-shell.component';

// Modules 
import { LabPublicFooterModule } from './footer/footer.module';
import { LabPublicHeaderModule } from './header/header.module';
import { LabPublicNavbarModule } from './navbar/navbar.module';
import { LabPublicSidenavModule } from './sidenav/sidenav.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // Modules
    LabPublicFooterModule,
    LabPublicHeaderModule,
    LabPublicNavbarModule,
    LabPublicSidenavModule,
  ],
  providers: [],
  declarations: [LabPublicShellComponent],
  exports: [
    LabPublicShellComponent,
    LabPublicFooterModule,
    LabPublicHeaderModule,
    LabPublicNavbarModule,
    LabPublicSidenavModule,
  ],
})
export class LabPublicShellModule {}
