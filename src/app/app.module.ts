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
import { ProjectsComponent } from './components/projects/projects.component';
import { IndexComponent } from './security/index/index.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { BannerComponent } from './components/banner/banner.component';
import { LoginComponent } from './security/auth/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AboutComponent,
    FooterComponent,
    SkillsComponent,
    StudiesComponent,
    ProjectsComponent,
    IndexComponent,
    JobsComponent,
    BannerComponent,
    LoginComponent

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
