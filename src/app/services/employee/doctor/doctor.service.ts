import { Injectable } from '@angular/core';
import { Doctor } from 'src/app/domain/employee/doctor';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private baseURL: string = '//localhost:8080/doctor';
  private id:number;

  constructor(private http:HttpClient) {}

  createDoctor(doctor:Doctor) : Observable<Doctor>{

    return this.http.post<Doctor>(this.baseURL + '/new', doctor);

  }

  findDoctorById(id:number) : Observable<Doctor>{

    return this.http.get<Doctor>(this.baseURL + '/find/' + id);
  }

  updateDoctor(note:Doctor) : Observable<Doctor>{

    return this.http.put<Doctor>(this.baseURL + '/update', note);

  }

  deleteDoctor(id: number) : Observable<any>{

    return this.http.delete(this.baseURL + '/delete/' + id);

  }

  getAll() : Observable<Doctor[]>{

    return this.http.get<Doctor[]>(this.baseURL + '/getall');

  }

  saveId(id:number){

    this.id = id;

  }

  getId() : number{

    return this.id;


  }
}
