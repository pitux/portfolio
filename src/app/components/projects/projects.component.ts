import { Component, OnInit } from '@angular/core';

import { TokenService } from 'src/app/security/service/token.service';
import { ProjectsService } from 'src/app/service/projects.service';
import { Project } from '../model/project';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  project: Project = null;
  projects: Project[] = [];
  roles!: string[];
  isAdmin = false;

  constructor(
    private projectService: ProjectsService,
    private toastr: ToastrService,
    private tokenService: TokenService,
    ) { }

    ngOnInit() {
      this.getProjects();
      this.roles = this.tokenService.getAuthorities();
      this.roles.forEach(rol => {
        if (rol === 'ROLE_ADMIN') {
          this.isAdmin = true;
        }
      });
    }

    getProjects(){
      this.projectService.listProjects().subscribe(
        data => {
          this.projects = data;
          console.log(data)
        },
        err => {
          console.log(err);
        }
      )
    }

    delete(id: number){
      this.projectService.deleteProject(id).subscribe(
        data => {
          this.toastr.success('Project deleted', 'OK', {
            timeOut: 3000, positionClass: 'toast-top-center'
          });
          this.getProjects();
        },
        err => {
          this.toastr.error(err.error.message, 'Fail', {
            timeOut: 3000, positionClass: 'toast-top-center',
          });
        }
      );
    }

}
