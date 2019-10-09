import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName:string = '';
  passwords:string = '';
  invalidLogin = false;

  constructor(private router: Router, private loginservice: LoginService) { }

  ngOnInit() {
  }

  login(){

  this.loginservice.authenticate(this.userName, this.passwords).subscribe(data => {

        this.router.navigate(['/patients/list'])
        this.invalidLogin = false
        this.loginservice.unhide();

      },
      error => {
        this.invalidLogin = true
      }
    );

  }

}
