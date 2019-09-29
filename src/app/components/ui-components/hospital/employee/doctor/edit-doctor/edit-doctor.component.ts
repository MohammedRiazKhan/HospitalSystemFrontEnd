import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/domain/employee/doctor';
import { DoctorService } from 'src/app/services/employee/doctor/doctor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.css']
})
export class EditDoctorComponent implements OnInit {

  doctor:Doctor;
  id:string;

  _doctor: Doctor = new Doctor();
  submitted = false;

  constructor(private doctorService:DoctorService, private router:Router) { }

  ngOnInit() {

    this.getDoctorToEdit();
  }

  getDoctorToEdit(){
    
    this.id = this.doctorService.getId();

    this.doctorService.findDoctorById(this.id).subscribe(data => {

      this.doctor = data;

    });
    
  }

  update(){

    this.doctorService.updateDoctor(this.doctor).subscribe(data => console.log(data), error1 => console.log(error1));
    this.router.navigate(['/doctors']);

  }

  onSubmit(){
    this.submitted = true;
    this.update();
  }

  cancel(){

    this.router.navigate(['/doctors']);

  }
  


}
