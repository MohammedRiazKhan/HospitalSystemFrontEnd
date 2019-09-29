import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from 'src/app/domain/patient/patient';




@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private baseURL: string = '//localhost:8080/patient';
  private id:number;

  constructor(private http:HttpClient) {}

  createPatient(patient:Patient) : Observable<Patient>{

    return this.http.post<Patient>(this.baseURL + '/new', patient);

  }

  findPatientById(id:number) : Observable<Patient>{

    return this.http.get<Patient>(this.baseURL + '/find/' + id);
  }

  updatePatient(patient:Patient) : Observable<Patient>{

    return this.http.put<Patient>(this.baseURL + '/update', patient);

  }

  deletePatient(id: number) : Observable<any>{

    return this.http.delete(this.baseURL + '/delete/' + id);

  }

  getAll() : Observable<Patient[]>{

    return this.http.get<Patient[]>(this.baseURL + '/getall');

  }

  saveId(id:number){

    this.id = id;

  }

  getId() : number{

    return this.id;


  }
}
