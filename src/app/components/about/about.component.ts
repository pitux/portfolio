import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/service/portfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  /* An array of objects that will be used to display the portfolio. */
  isLogged=false; //Lo niego en la vista para no mostrar el botón
  portfolioList: any = [];

  constructor(private portfolioService: PortfolioService) { }
  
  ngOnInit(): void {
    this.portfolioService.getPortfolio().subscribe((response: any) => console.log(response));
    this.portfolioService.getPortfolio().subscribe((response: any) => this.portfolioList = response);
  }


}
