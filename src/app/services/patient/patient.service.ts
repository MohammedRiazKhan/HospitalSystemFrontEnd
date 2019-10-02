import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { InPatient } from 'src/app/domain/patient/in-patient';


@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private baseURL: string = '//localhost:8080/patient';
  private id:string;

  constructor(private http:HttpClient) {}

  createPatient(patient:InPatient) : Observable<InPatient>{
    let username='doctor'
    let password='doctor'
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.http.post<InPatient>(this.baseURL + '/new', patient, {headers});

  }

  findPatientById(id:string) : Observable<InPatient>{
    let username='doctor'
    let password='doctor'
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.http.get<InPatient>(this.baseURL + '/find/' + id, {headers});
  }

  updatePatient(patient:InPatient) : Observable<InPatient>{
    let username='doctor'
    let password='doctor'
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.http.put<InPatient>(this.baseURL + '/update', patient, {headers});

  }

  deletePatient(id: string) : Observable<any>{

    return this.http.delete(this.baseURL + '/delete/' + id);

  }

  getAll() : Observable<InPatient[]>{

    let username='doctor'
    let password='doctor'
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.http.get<InPatient[]>(this.baseURL + '/getall', {headers});

  }

  saveId(id:string){

    this.id = id;

  }

  getId() : string{

    return this.id;


  }
}
