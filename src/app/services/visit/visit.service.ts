import { Injectable } from '@angular/core';
import { Visit } from 'src/app/domain/visit/visit';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisitService {

  private baseURL: string = '//localhost:8080/visit';
  private id:string;

  constructor(private http:HttpClient) {}

  createVisit(visit:Visit) : Observable<Visit>{
    let username='doctor'
    let password='doctor'
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.http.post<Visit>(this.baseURL + '/new', visit, {headers});

  }

  findVisitById(id:string) : Observable<Visit>{
    let username='doctor'
    let password='doctor'
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.http.get<Visit>(this.baseURL + '/find/' + id, {headers});
  }

  updateVisit(visit:Visit) : Observable<Visit>{
    let username='doctor'
    let password='doctor'
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.http.put<Visit>(this.baseURL + '/update', visit, {headers});

  }

  deleteVisit(id: string) : Observable<any>{

    return this.http.delete(this.baseURL + '/delete/' + id);

  }

  getAll() : Observable<Visit[]>{
    let username='doctor'
    let password='doctor'
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.http.get<Visit[]>(this.baseURL + '/getall', {headers});

  }

  saveId(id:string){

    this.id = id;

  }

  getId() : string{

    return this.id;


  }
}
