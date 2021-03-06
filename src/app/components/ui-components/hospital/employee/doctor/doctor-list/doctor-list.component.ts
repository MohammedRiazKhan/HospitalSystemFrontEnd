import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/domain/employee/doctor';
import { DoctorService } from 'src/app/services/employee/doctor/doctor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {

  private doctors: Doctor[];

  private doctor:Doctor;
  id:string;

  constructor(private doctorService:DoctorService, private router:Router) { }

  ngOnInit() {
    
    this.getDoctors();
    this.setActive();

  }

  getDoctors(){
    this.doctorService.getAll().subscribe(data => {
      this.doctors = data;
    });
  }

  deleteNote(id:string) {
    this.doctorService.deleteDoctor(id).subscribe(

      data => {
       console.log(data);
       this.getDoctors();
      }
    );
  }

  editDoctor(id:string) {

    this.router.navigate(['/doctors/edit']);
    this.doctorService.saveId(id);

  }


  setActive(){
    document.getElementById('doctorsLink').classList.add('active');
    document.getElementById('patientsLink').classList.remove('active');
    document.getElementById('visitsLink').classList.remove('active');
  }

}
