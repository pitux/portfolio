import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from 'src/app/security/service/token.service';
import { SkillsService } from 'src/app/service/skills.service';
import { Skills } from '../../model/skills';

@Component({
  selector: 'app-update-skills',
  templateUrl: './update-skills.component.html',
  styleUrls: ['./update-skills.component.css']
})
export class UpdateSkillsComponent implements OnInit {

  roles!: string[];
  isAdmin = false;


/* Declaring a variable of type Skills and initializing it to null. */
  skills: Skills = null;

  constructor(    
    private skillService: SkillsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private tokenService: TokenService) { }

  ngOnInit() {
    
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });

    const id = this.activatedRoute.snapshot.params['id'];

    this.skillService.detail(id).subscribe(
      data => {
        console.log("Skill ID:" + data.idSkills);
        console.log("Skill:" + data.skills_name);
        console.log("Knowledge: " + data.skills_domain);
        this.skills = data;
      },
      err => {
        this.toastr.error(err.error.mesagge, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.router.navigate(['/portfolio/all']);
      }
    )
  }

onUpdate(){

  const id = this.activatedRoute.snapshot.params['id'];

  console.log("Clase: " + this.skills)

  this.skillService.update(id, this.skills).subscribe(
      data => {
        this.toastr.success('Skill Updated', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        console.log(data);
        this.router.navigate(['/portfolio/all']);
      },
      err => {
        this.toastr.error(err.error.mesagge, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        // this.router.navigate(['/']);
      }
    );
  }
}