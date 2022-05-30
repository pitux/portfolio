import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { StudiesComponent } from './components/studies/studies.component';

import { LoginComponent } from './security/auth/login/login.component';
import { IndexComponent } from './security/index/index.component';

import { PortfolioGuardService } from './security/guards/portfolio-guard.service';

import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';

import { NewSkillsComponent } from './components/skills/new-skills/new-skills.component';
import { UpdateSkillsComponent } from './components/skills/update-skills/update-skills.component';
import { UpdatePersonComponent } from './components/about/update-person/update-person.component';

const routes: Routes = [

  { path: '', component: IndexComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: 'projects/all', component: ProjectsComponent },
  /* Person */
  { path: 'person/update/:id', component: UpdatePersonComponent, canActivate: [PortfolioGuardService], data: {expectedRol: ['admin']}  },

  /* Projects */
  /*
  { path: 'projects/new', component: NewProjectComponent},
  { path: 'projects/update', component: EditProjectComponent},
  */
  /* Skills */
  { path: 'skills/all', component: SkillsComponent },
  { path: 'skills/new', component:  NewSkillsComponent, canActivate: [PortfolioGuardService], data: {expectedRol: ['admin']} },
  { path: 'skills/update/:id', component:  UpdateSkillsComponent, canActivate: [PortfolioGuardService], data: {expectedRol: ['admin']} },
    
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
