import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from 'src/app/security/service/token.service';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { Persona } from '../model/persona';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  roles: string[] = [];
  portfolioList: any = [];
  isAdmin = false;

  //persona: Persona = null;

  constructor(
    private portfolioService: PortfolioService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private tokenService: TokenService,
) { }
  
  ngOnInit(){
    
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });

    this.portfolioService.getPortfolio().subscribe((response: any) => console.log(response));
    this.portfolioService.getPortfolio().subscribe((response: any) => this.portfolioList = response);
  }

/*

  onAboutUpdate(){

    const id = this.activatedRoute.snapshot.params['id'];

    console.log("Clase: " + this.persona)
  
    this.portfolioService.updatePersona(id, this.persona).subscribe(
        data => {
          this.toastr.success('Person Updated', 'OK', {
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
*/
}



