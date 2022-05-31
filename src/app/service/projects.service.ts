import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../components/model/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  
  
  //apiUrl = "https://portfolio-pdg.herokuapp.com/projects/";
  apiUrl="http://localhost:8080/projects/";


  constructor(private http: HttpClient) { }

  public listProjects(): Observable<Project[]>{
    return this.http.get<Project[]>(this.apiUrl + 'all')
  }
  
  public detail(id: number):Observable<Project> {
    return this.http.get<Project>(this.apiUrl + 'detail/${id}')
  }

  public detailProject(id: number): Observable<Project> {
    console.log(this.apiUrl + `view/${id}`);
    return this.http.get<Project>(this.apiUrl + `view/${id}`);
  }

  public saveProject(project: Project): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'new', project);
  }

  public updateProject(id: number, project: Project): Observable<any>{

    console.log(this.http.put<any>(this.apiUrl + 'update'+ id, project));
    return (this.http.put<any>(this.apiUrl + 'update/' + id , project));

  }

  public deleteProject(id: number): Observable<any> {
    return this.http.delete<any>(this.apiUrl + 'delete/' + id);
  }

}
