import { Injectable } from '@angular/core';
import { Visit } from 'src/app/domain/visit/visit';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisitService {

  private baseURL: string = '//localhost:8080/visit';
  private id:string;

  constructor(private http:HttpClient) {}

  createVisit(visit:Visit) : Observable<Visit>{

    return this.http.post<Visit>(this.baseURL + '/new', visit);

  }

  findVisitById(id:string) : Observable<Visit>{

    return this.http.get<Visit>(this.baseURL + '/find/' + id);
  }

  updateVisit(visit:Visit) : Observable<Visit>{

    return this.http.put<Visit>(this.baseURL + '/update', visit);

  }

  deleteVisit(id: string) : Observable<any>{

    return this.http.delete(this.baseURL + '/delete/' + id);

  }

  getAll() : Observable<Visit[]>{

    return this.http.get<Visit[]>(this.baseURL + '/getall');

  }

  saveId(id:string){

    this.id = id;

  }

  getId() : string{

    return this.id;


  }
}
