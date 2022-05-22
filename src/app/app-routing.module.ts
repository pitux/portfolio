import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { EditProjectComponent } from './components/projects/edit-project/edit-project.component';
import { ListProjectsComponent } from './components/projects/list-projects/list-projects.component';
import { StudiesComponent } from './components/studies/studies.component';

import { LoginComponent } from './security/auth/login/login.component';
import { IndexComponent } from './security/index/index.component';

const routes: Routes = [

  { path: '', component: IndexComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: 'project/all', component: ListProjectsComponent },
  { path: 'project/edit', component: EditProjectComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
  /*
  { path: 'studies', component: StudiesComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'about', component: AboutComponent },
  
*/

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
