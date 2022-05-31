import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../components/model/persona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http: HttpClient) { }

  apiUrl = "https://portfolio-pdg.herokuapp.com/";

  getPortfolio(): any{
    //console.log(this.http.get(this.apiUrl + 'portfolio/all'));
    return this.http.get(this.apiUrl + 'portfolio/all');
  }

  getPortfolioById(id: number): Observable<Persona> {
    console.log(id)
    console.log("URL: "+ this.apiUrl + `portfolio/view/${id}` );
    return this.http.get<Persona>(this.apiUrl + `portfolio/view/${id}`);
  }

  public updatePersona(id: number, persona: Persona): Observable<any> {
    //http://localhost:8080/portfolio/update/1
    console.log("URL UPDATE: " + this.apiUrl + `portfolio/update/${id}`, "Clase" + persona);
    return this.http.put<any>(this.apiUrl + `portfolio/update/${id}`, persona);
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
