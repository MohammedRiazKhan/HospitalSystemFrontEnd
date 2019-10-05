import { Injectable } from '@angular/core';
import { Doctor } from 'src/app/domain/employee/doctor';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private baseURL: string = '//localhost:8080/doctor';
  private id:string;

  constructor(private http:HttpClient) {}

  createDoctor(doctor:Doctor) : Observable<Doctor>{

    let username='admin';
    let password='admin';
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.http.post<Doctor>(this.baseURL + '/new', doctor, {headers});

  }

  findDoctorById(id:string) : Observable<Doctor>{

    let username='admin';
    let password='admin';
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.http.get<Doctor>(this.baseURL + '/find/' + id, {headers});
  }

  updateDoctor(note:Doctor) : Observable<Doctor>{
    let username='admin';
    let password='admin';
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.http.put<Doctor>(this.baseURL + '/update', note, {headers});

  }

  deleteDoctor(id: string) : Observable<any>{

    return this.http.delete(this.baseURL + '/delete/' + id);

  }

  getAll() : Observable<Doctor[]>{
    let username='admin';
    let password='admin';
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.http.get<Doctor[]>(this.baseURL + '/getall', {headers});

  }

  saveId(id:string){

    this.id = id;

  }

  getId() : string{

    return this.id;


  }
}
