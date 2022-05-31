import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from 'src/app/security/service/token.service';
import { ProjectsService } from 'src/app/service/projects.service';
import { StudiesService } from 'src/app/service/studies.service';
import { Skills } from '../model/skills';
import { Studies } from '../model/studies';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit {

  roles: string[] = [];
  isAdmin = false;


studies: Studies[] = [];

  constructor(
    private studiesService: StudiesService,
    private toastr: ToastrService,
    private tokenService: TokenService,
  ) { }

  ngOnInit(){
    this.getStudies()  
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  getStudies(){
    this.studiesService.listStudies().subscribe(
      data => {
        this.studies = data;
        console.log(data);
      },
      err => {
        console.log(err);
      }
    )
  }

  delete(id: number){
    this.studiesService.deleteStudies(id).subscribe(
      data => {
        this.toastr.success('Skill deleted', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.getStudies();
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    );
  }

}
