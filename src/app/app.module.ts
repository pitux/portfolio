import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms'; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { SkillsComponent } from './components/skills/skills.component';
import { StudiesComponent } from './components/studies/studies.component';
import { IndexComponent } from './security/index/index.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { BannerComponent } from './components/banner/banner.component';
import { LoginComponent } from './security/auth/login/login.component';
import { EditProjectComponent } from './components/projects/edit-project/edit-project.component';
import { ListProjectsComponent } from './components/projects/list-projects/list-projects.component';
import { NewProjectComponent } from './components/projects/new-projects/new-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AboutComponent,
    FooterComponent,
    SkillsComponent,
    StudiesComponent,
    IndexComponent,
    JobsComponent,
    BannerComponent,
    LoginComponent,
    EditProjectComponent,
    ListProjectsComponent,
    NewProjectComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ToastrModule.forRoot({
      positionClass :'toast-bottom-right'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
