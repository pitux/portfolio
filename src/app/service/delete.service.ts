import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(private http: HttpClient) { }

  apiUrl = "https://portfolio-pdg.herokuapp.com/";
//apiUrl="http://localhost:8080";
  
deleteProject():any {
    this.apiUrl + 'projects/delete/'
  }
}
