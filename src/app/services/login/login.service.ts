import { Injectable } from '@angular/core';

import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Login } from 'src/app/domain/login';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  private baseURL: string = '//localhost:8080/login';

  constructor(private http:HttpClient, private router:Router) { }

  authenticate(username:string, password:string) {

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.http.get<Login>(this.baseURL + '/validateLogin', {headers}).pipe(
     map(
       userData => {
        sessionStorage.setItem('username', username);
        return userData;
       }
     )

    );
  }

isUserLoggedIn() {
  let user = sessionStorage.getItem('username')
  console.log(!(user === null))
  return !(user === null)
}

checkIfLoggedIn(){
  let user = sessionStorage.getItem('username')

  if(user != null){
    return true;
  }

  return false;
}

logOut() {
  sessionStorage.removeItem('username');
  this.router.navigate['/login'];
  this.hide();
  
}

hide(){
  document.getElementById('visitsLink').classList.add('hidden');
  document.getElementById('patientsLink').classList.add('hidden');
  document.getElementById('doctorsLink').classList.add('hidden');
  document.getElementById('logout').classList.add('hidden');
 
}

unhide(){
  document.getElementById('visitsLink').classList.remove('hidden');
  document.getElementById('patientsLink').classList.remove('hidden');
  document.getElementById('doctorsLink').classList.remove('hidden');
  document.getElementById('logout').classList.remove('hidden');
}

}
