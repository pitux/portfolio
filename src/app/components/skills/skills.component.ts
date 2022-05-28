import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from 'src/app/security/service/token.service';
import { SkillsService } from 'src/app/service/skills.service';
import { Skills } from '../model/skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  max = 100;
  
  skills: Skills[] = [];
  roles!: string[];
  isAdmin = false;

  constructor(
    private skillService: SkillsService,
    private toastr: ToastrService,
    private tokenService: TokenService
  ) { }

  ngOnInit() {
    this.getSkills();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }


getSkills(){

  this.skillService.listSkills().subscribe(

    data => {
      this.skills = data;
    },
    err => {
      console.log(err);
    }
  )
}

}
