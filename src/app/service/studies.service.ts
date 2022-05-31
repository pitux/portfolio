import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../components/model/project';
import { Studies } from '../components/model/studies';

@Injectable({
  providedIn: 'root'
})
export class StudiesService {

  apiUrl="http://localhost:8080/studies/";

  constructor(private http: HttpClient) { }

  public listStudies(): Observable<Studies[]>{
    return this.http.get<Studies[]>(this.apiUrl + 'all')
  }
  
  public detail(id: number):Observable<Studies> {
    return this.http.get<Studies>(this.apiUrl + 'detail/${id}')
  }

  public detailStudies(id: number): Observable<Studies> {
    console.log(this.apiUrl + `view/${id}`);
    return this.http.get<Studies>(this.apiUrl + `view/${id}`);
  }

  public saveStudies(studies: Studies): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'new', studies);
  }

  public updateStudies(id: number, studies: Studies): Observable<any>{

    console.log(this.http.put<any>(this.apiUrl + 'update'+ id, studies));
    return (this.http.put<any>(this.apiUrl + 'update/' + id , studies));

  }

  public deleteStudies(id: number): Observable<any> {
    return this.http.delete<any>(this.apiUrl + 'delete/' + id);
  }

}
