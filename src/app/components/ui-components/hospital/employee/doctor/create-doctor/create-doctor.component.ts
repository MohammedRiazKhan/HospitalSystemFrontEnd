import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/domain/employee/doctor';
import { DoctorService } from 'src/app/services/employee/doctor/doctor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-doctor',
  templateUrl: './create-doctor.component.html',
  styleUrls: ['./create-doctor.component.css']
})
export class CreateDoctorComponent implements OnInit {

  doctor: Doctor = new Doctor();
  submitted = false;

  constructor(private doctorService:DoctorService, private router:Router) { }

  ngOnInit() {
  }

  newDoctor() : void{
    this.submitted = false;
    this.doctor = new Doctor();
  }

  save(){
    //implement this with the use of the doctor service to pass this in
  }

  onSubmit(){
    this.submitted = true;
    this.save();
    this.router.navigate(['/doctors']);
  }

  cancel(){
    this.router.navigate(['/doctors']);
  }

}
