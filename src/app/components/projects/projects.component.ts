import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


import { LoginUsuario } from 'src/app/security/Entity/login-usuario';
import { AuthService } from 'src/app/security/service/auth.service';
import { TokenService } from 'src/app/security/service/token.service';
import { PortfolioService } from 'src/app/service/portfolio.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

editIcon = faPenToSquare;
deleteIcon = faTrashCan;
addIcon = faAdd;

isLogged=false;
isLoginFail = false;

loginUsuario!: LoginUsuario;
nombreUsuario!: string;
password!: string;
roles: string[] = [];
errorMessage!: string;
projectsList: any = [];

constructor(
  private portfolioService: PortfolioService,
  private tokenService: TokenService,
  private authService: AuthService,
  private router: Router) { }

ngOnInit(): void {

  if(this.tokenService.getToken()){
    this.isLogged = true;
    console.log(this.isLogged)
  }else {
    this.isLogged = false;
    console.log(this.isLogged)
  }

  if(this.tokenService.getToken()){

    this.isLogged = true;
    this.isLoginFail = false;
    this.roles = this.tokenService.getAuthorities();
  }



  this.portfolioService.getProjects().subscribe((response: any) => console.log(response));
  this.portfolioService.getProjects().subscribe((response: any) => this.projectsList = response);
}

}
