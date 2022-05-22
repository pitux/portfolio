import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from 'src/app/security/service/token.service';
import { ProjectsService } from 'src/app/service/projects.service';
import { Project } from '../../model/project';

@Component({
  selector: 'app-new',
  templateUrl: './new-projects.component.html',
  styleUrls: ['./new-projects.component.css']
})
export class NewProjectComponent implements OnInit {

  
  roles!: string[];
  isAdmin = false;

  project_id!: number;
  project_name!: string;
  project_description!: string;
  project_tools!: string;
  project_start!: string;
  project_snapshot!: string;
  project_url!: string;


  constructor(
    private projectService: ProjectsService,
    private toastr: ToastrService,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
  } 
  
  onCreate(): void {
    const project = new Project(this.project_name, this.project_description, this.project_start, this.project_tools, this.project_snapshot, this.project_url);
    this.projectService.saveProject(project).subscribe(
      data => {
        this.toastr.success('Producto Creado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        //this.router.navigate(['/lista']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        // this.router.navigate(['/']);
      }
    );
  }

}
