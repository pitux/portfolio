import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http: HttpClient) { }

  apiUrl = "https://portfolio-pdg.herokuapp.com/";
//apiUrl="http://localhost:8080/";

  getPortfolio(): any{
    //console.log(this.http.get(this.apiUrl + 'portfolio/all'));
    return this.http.get(this.apiUrl + 'portfolio/all');
  }

  getStudies():any {
    return this.http.get(this.apiUrl + 'studies/all');
  }

  getJobs():any {
    return this.http.get(this.apiUrl + 'jobs/all');
  }
  

  getSkills():any {
    return this.http.get(this.apiUrl + 'skills/all');
  }

  
}
