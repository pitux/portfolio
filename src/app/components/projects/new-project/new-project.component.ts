import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from 'src/app/security/service/token.service';
import { ProjectsService } from 'src/app/service/projects.service';
import { Project } from '../../model/project';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  roles!: string[];
  isAdmin: boolean = false;

  project: Project = null;

  project_name = '';
  project_description = '';
  project_img = '';
  project_start = '';
  project_tools = '';
  project_url = '';


  constructor(
    private projectService: ProjectsService,
    private tokenService: TokenService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
      console.log("Projects - User is admin: " + this.isAdmin);
    });
  }

/*
*/

  onCreate(): void {
    const project = new Project(
      this.project_name,
      this.project_description,
      this.project_img,
      this.project_start,
      this.project_tools,
      this.project_url
    );
    
    this.projectService.saveProject(project).subscribe(
      data => {
        this.toastr.success('Project created!', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['']);
      },
      err => {
        this.toastr.error('', 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        // this.router.navigate(['/']);
      }
    );
  }

}
