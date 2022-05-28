import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../components/model/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  static listSkills() {
    throw new Error('Method not implemented.');
  }

  apiUrl="http://localhost:8080/skills/";

  constructor(private http: HttpClient) { }

  public listSkills(): Observable<Skills[]>{
    return this.http.get<Skills[]>(this.apiUrl + 'all')
  }

  public save(skill: Skills): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'new', skill);
  }

  public update(id: number, skill: Skills): Observable<any> {
    return this.http.put<any>(this.apiUrl + `update/${id}`, skill);
  }
  
}
