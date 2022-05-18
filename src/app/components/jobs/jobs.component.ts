import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/service/portfolio.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

    /* An array of objects that will be used to display the portfolio. */
    isLogged=true; //Lo niego en la vista para no mostrar el botón
    jobsList: any = [];

  constructor(private portfolioService: PortfolioService) { }
  
  ngOnInit(): void {
    this.portfolioService.getJobs().subscribe((response: any) => console.log(response));
    this.portfolioService.getJobs().subscribe((response: any) => this.jobsList = response);
  }
}
