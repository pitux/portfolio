import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { StudiesComponent } from './components/studies/studies.component';

import { LoginComponent } from './security/auth/login/login.component';
import { IndexComponent } from './security/index/index.component';
import { PortfolioGuardService as guard} from './security/guards/portfolio-guard.service';

import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';

import { NewSkillsComponent } from './components/skills/new-skills/new-skills.component';
import { UpdateSkillsComponent } from './components/skills/update-skills/update-skills.component';

const routes: Routes = [

  { path: '', component: IndexComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: 'projects/all', component: ProjectsComponent },
  /*
  { path: 'projects/new', component: NewProjectComponent},
  { path: 'projects/update', component: EditProjectComponent},
  */
  { path: 'skills/all', component: SkillsComponent },
  { path: 'skills/new', component:  NewSkillsComponent},
  { path: 'skills/update', component:  UpdateSkillsComponent},
  
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
