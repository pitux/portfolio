import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faPenToSquare, faTrashCan, faAdd, faSave, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { ProjectsService } from 'src/app/service/projects.service';
import { Project } from '../../model/project';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {

editIcon = faPenToSquare;
deleteIcon = faTrashCan;
addIcon = faAdd;
saveIcon = faSave;
webIcon = faGlobe;

  project!: Project;

  constructor(
    private projectService: ProjectsService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.projectService.detail(id).subscribe(
      data => {
        this.project = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/']);
      }
    );
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.projectService.updateProject(id, this.project).subscribe(
      data => {
        this.toastr.success('Project Updated', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/projects/all']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
      }
    );
  }

}
