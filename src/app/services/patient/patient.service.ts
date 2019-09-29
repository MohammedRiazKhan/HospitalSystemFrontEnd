import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

    return this.http.post<InPatient>(this.baseURL + '/new', patient);

  }

  findPatientById(id:string) : Observable<InPatient>{

    return this.http.get<InPatient>(this.baseURL + '/find/' + id);
  }

  updatePatient(patient:InPatient) : Observable<InPatient>{

    return this.http.put<InPatient>(this.baseURL + '/update', patient);

  }

  deletePatient(id: string) : Observable<any>{

    return this.http.delete(this.baseURL + '/delete/' + id);

  }

  getAll() : Observable<InPatient[]>{

    return this.http.get<InPatient[]>(this.baseURL + '/getall');

  }

  saveId(id:string){

    this.id = id;

  }

  getId() : string{

    return this.id;


  }
}
