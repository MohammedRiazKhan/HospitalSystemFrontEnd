import { Injectable } from '@angular/core';
import { Visit } from 'src/app/domain/visit/visit';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisitService {

  private baseURL: string = '//localhost:8080/visit';
  private id:number;

  constructor(private http:HttpClient) {}

  createVisit(visit:Visit) : Observable<Visit>{

    return this.http.post<Visit>(this.baseURL + '/new', visit);

  }

  findVisitById(id:number) : Observable<Visit>{

    return this.http.get<Visit>(this.baseURL + '/find/' + id);
  }

  updateVisit(visit:Visit) : Observable<Visit>{

    return this.http.put<Visit>(this.baseURL + '/update', visit);

  }

  deleteVisit(id: number) : Observable<any>{

    return this.http.delete(this.baseURL + '/delete/' + id);

  }

  getAll() : Observable<Visit[]>{

    return this.http.get<Visit[]>(this.baseURL + '/getall');

  }

  saveId(id:number){

    this.id = id;

  }

  getId() : number{

    return this.id;


  }
}
