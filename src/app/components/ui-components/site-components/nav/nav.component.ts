import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  loggedIn = false;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    //this.getLogInState();
  }

  getLogInState(){
    this.loggedIn = this.loginService.checkIfLoggedIn();
  }

  changeLink1(){
    document.getElementById('patientsLink').classList.add('active');
    document.getElementById('visitsLink').classList.remove('active');
    document.getElementById('doctors').classList.remove('active');
  }

  changeLink2(){
    document.getElementById('visitsLink').classList.add('active');
    document.getElementById('patientsLink').classList.remove('active');
    document.getElementById('doctorsLink').classList.remove('active');

  }

  changeLink3(){
    document.getElementById('visitsLink').classList.remove('active');
    document.getElementById('patientsLink').classList.remove('active');
    document.getElementById('doctorsLink').classList.add('active');

  }

  logout(){
    this.loginService.logOut();
  }

}
