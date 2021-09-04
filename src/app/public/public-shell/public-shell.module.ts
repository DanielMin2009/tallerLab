import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Routing
import { LabRoutingModule } from 'src/app/lab-routing.module';

// Components
import { PublicShellComponent } from './public-shell.component';

// Modules
import { PublicFooterModule } from './footer/footer.module';
import { PublicHeaderModule } from './header/header.module';
import { PublicNavbarModule } from './navbar/navbar.module';
import { PublicMainModule } from './main/main.module';
import { PublicSidebarModule } from './sidebar/sidebar.module';

@NgModule({
  imports: [
    BrowserModule,
    LabRoutingModule,
    // Modules
    PublicFooterModule,
    PublicHeaderModule,
    PublicMainModule,
    PublicNavbarModule,
    PublicSidebarModule,
  ],
  providers: [],
  declarations: [PublicShellComponent],
  exports: [
    PublicShellComponent,
    PublicFooterModule,
    PublicHeaderModule,
    PublicMainModule,
    PublicNavbarModule,
    PublicSidebarModule,
  ],
})
export class PublicShellModule {}
