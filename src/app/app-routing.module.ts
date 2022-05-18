import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { StudiesComponent } from './components/studies/studies.component';

import { LoginComponent } from './security/auth/login/login.component';
import { IndexComponent } from './security/index/index.component';

const routes: Routes = [

  { path: '', component: IndexComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: 'studies', component: StudiesComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
