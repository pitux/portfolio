import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from 'src/app/security/service/token.service';
import { ProjectsService } from 'src/app/service/projects.service';
import { Project } from '../../model/project';

@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.css']
})
export class ListProjectsComponent implements OnInit {

  projects: Project[] = [];
  roles!: string[];
  isAdmin = false;

  constructor(
    private projectService: ProjectsService,
    private toastr: ToastrService,
    private tokenService: TokenService
  ) { }

  ngOnInit(){
    this.listProject();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  listProject():void{
    this.projectService.listProjects().subscribe(
      data => {
        this.projects = data;
      },
      err => {
        console.log(err);
      }
    )
  }
  borrar(id: number) {
    this.projectService.deleteProject(id).subscribe(
      data => {
        this.toastr.success('Project Deleted', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.listProject();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    );
  }
}