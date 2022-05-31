import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from 'src/app/security/service/token.service';
import { SkillsService } from 'src/app/service/skills.service';
import { Skills } from '../../model/skills';

@Component({
  selector: 'app-new-skills',
  templateUrl: './new-skills.component.html',
  styleUrls: ['./new-skills.component.css']
})
export class NewSkillsComponent implements OnInit {

roles!: string[];
isAdmin: boolean = false;

skills_name = '';
skills_domain!: number;
skills_id!: number;

  constructor(
    private skillService: SkillsService,
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

  onCreate(): void {
    const skill = new Skills(this.skills_name, this.skills_domain);
    this.skillService.save(skill).subscribe(
      data => {
        this.toastr.success('Skill created!', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['']);
      },
      err => {
        this.toastr.error('', 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        // this.router.navigate(['/']);
      }
    );
  }

}
