import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Views
import { LabAboutViewComponent } from './public/views/about/about.component';
import { LabContactViewComponent } from './public/views/contact/contact.component';
import { LabHomeViewComponent } from './public/views/home/home.component';
import { LabProjectsViewComponent } from './public/views/projects/projects.component';

const ROUTES: Routes = [
  { path: "", component: LabHomeViewComponent },
  { path: "about", component: LabAboutViewComponent },
  { path: "projects", component: LabProjectsViewComponent },
  { path: "contact", component: LabContactViewComponent },

  { path: "**", pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, {
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})


export class AppRoutingModule { }
