import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Views
import { AboutViewComponent } from './public/views/about/about.component';
import { ContactViewComponent } from './public/views/contact/contact.component';
import { HomeViewComponent } from './public/views/home/home.component';
import { ProjectsViewComponent } from './public/views/projects/projects.component';

const ROUTES: Routes = [
  { path: "", component: HomeViewComponent },
  { path: "about", component: AboutViewComponent },
  { path: "projects", component: ProjectsViewComponent },
  { path: "contact", component: ContactViewComponent },

  { path: "**", pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, {
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})


export class LabRoutingModule { }
