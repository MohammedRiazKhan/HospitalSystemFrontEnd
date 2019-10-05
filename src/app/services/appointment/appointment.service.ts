import { Injectable } from '@angular/core';

import { Appointment } from 'src/app/domain/appointment';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private baseURL: string = '//localhost:8080/appointment';
  private id:string;

  constructor(private http:HttpClient) {}

  createAppointment(appointment:Appointment) : Observable<Appointment>{
    
    let username='admin';
    let password='admin';
    
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.http.post<Appointment>(this.baseURL + '/new', appointment, {headers});

  }

  findAppointmentById(id:string) : Observable<Appointment>{

    let username='admin';
    let password='admin';
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.http.get<Appointment>(this.baseURL + '/find/' + id, {headers});
  }

  updateAppointment(appointment:Appointment) : Observable<Appointment>{
    let username='admin';
    let password='admin';
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.http.put<Appointment>(this.baseURL + '/update', appointment, {headers});

  }

  deleteAppointment(id: string) : Observable<any>{


    let username='admin';
    let password='admin';
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });


    return this.http.delete(this.baseURL + '/delete/' + id, {headers});

  }

  getAll() : Observable<Appointment[]>{
    let username='admin';
    let password='admin';
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.http.get<Appointment[]>(this.baseURL + '/getall', {headers});

  }

  saveId(id:string){

    this.id = id;

  }

  getId() : string{

    return this.id;


  }
}
