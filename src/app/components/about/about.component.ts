import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/security/Entity/login-usuario';
import { AuthService } from 'src/app/security/service/auth.service';
import { TokenService } from 'src/app/security/service/token.service';
import { PortfolioService } from 'src/app/service/portfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  
  isLogged=false; //Lo niego en la vista para no mostrar el botón
  isLoginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errorMessage!: string;
  portfolioList: any = [];

  constructor(
    private portfolioService: PortfolioService,
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router) { }
  
  ngOnInit(): void {

    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else {
      this.isLogged = false;
    }

    if(this.tokenService.getToken()){
  
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }

    this.portfolioService.getPortfolio().subscribe((response: any) => console.log(response));
    this.portfolioService.getPortfolio().subscribe((response: any) => this.portfolioList = response);
  }


}
