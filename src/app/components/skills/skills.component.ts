import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from 'src/app/security/service/token.service';
import { SkillsService } from 'src/app/service/skills.service';
import { Skills } from '../model/skills';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  max = 100;


skills_name = '';
skills_domain!: number;
id_skills!: number;
    
  skills: Skills[] = [];
  roles!: string[];
  isAdmin = false;
  
  /* Modal */ 
  closeResult: string = '';

  constructor(
    private skillService: SkillsService,
    private toastr: ToastrService,
    private router: Router,
    private tokenService: TokenService,
    private modalService: NgbModal
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
/**
 * It creates a new skill, saves it, and then redirects the user to the portfolio page
 */
  onCreateSkill(): void {
    const skill = new Skills(this.skills_name, this.skills_domain);
    this.skillService.save(skill).subscribe(
      data => {
        this.toastr.success('Skill created!', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.router.navigateByUrl('/portfolio/all');
      },
      err => {
        this.toastr.error('', 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

/**
 * We're calling the listSkills() function from the skillService, and then we're subscribing to the
 * observable that it returns. 
 * 
 * If the observable returns data, we're assigning that data to the skills variable. 
 * 
 * If the observable returns an error, we're logging that error to the console.
 */
getSkills(){
  this.skillService.listSkills().subscribe(
    data => {
      this.skills = data;
      console.log(data);
    },
    err => {
      console.log(err);
    }
  )
}

/**
 * It calls the delete method of the skill service, and if the deletion is successful, it displays a
 * success message and refreshes the list of skills
 * @param {number} id - number - the id of the skill to be deleted
 */
delete(id: number){
  this.skillService.delete(id).subscribe(
    data => {
      this.toastr.success('Skill deleted', 'OK', {
        timeOut: 3000, positionClass: 'toast-top-center'
      });
      this.getSkills();
    },
    err => {
      this.toastr.error(err.error.message, 'Fail', {
        timeOut: 3000, positionClass: 'toast-top-center',
      });
    }
  );
}

open(content:any) {

  this.modalService.open(content, {ariaLabelledBy: 'edit-skill'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
} 

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return  `with: ${reason}`;
  }
}
}
