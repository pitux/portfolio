import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from 'src/app/security/service/token.service';
import { StudiesService } from 'src/app/service/studies.service';
import { Studies } from '../../model/studies';

@Component({
  selector: 'app-new-study',
  templateUrl: './new-study.component.html',
  styleUrls: ['./new-study.component.css']
})
export class NewStudyComponent implements OnInit {

  roles: string[] = [];
  isAdmin = false;

  study: Studies = null;

  studies_title='';
  studies_institute='';
  studies_year='';
  studies_logo='';


  constructor(  
    private studyService: StudiesService,
    private tokenService: TokenService,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit() {
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
      console.log("Studies - User is admin: " + this.isAdmin);
    });
  }

  onCreate(): void{
    const study = new Studies(
      this.studies_title,
      this.studies_institute,
      this.studies_year,
      this.studies_logo
      );

      this.studyService.saveStudies(study).subscribe(
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
