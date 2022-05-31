import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from 'src/app/security/service/token.service';
import { JobsService } from 'src/app/service/jobs.service';
import { Job } from '../../model/jobs';

@Component({
  selector: 'app-new-job',
  templateUrl: './new-job.component.html',
  styleUrls: ['./new-job.component.css']
})
export class NewJobComponent implements OnInit {

  roles: string[] = [];
  isAdmin = false;

  jobs: Job = null;

  job_name = '';
  job_place = '';
  job_year = '';

  constructor(
    private jobsService: JobsService,
    private toastr: ToastrService,
    private tokenService: TokenService,
    private router: Router
  ) { }

  ngOnInit() {
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
      console.log("Jobs - User is admin: " + this.isAdmin);
    });
  }

  onCreate(): void{
    const jobs = new Job(
      this.job_name,
      this.job_place,
      this.job_year
      
      );

      this.jobsService.saveJob(jobs).subscribe(
        data => {
          this.toastr.success('Job created!', 'OK', {
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
