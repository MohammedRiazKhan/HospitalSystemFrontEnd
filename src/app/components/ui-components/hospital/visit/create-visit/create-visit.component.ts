import { Component, OnInit } from '@angular/core';
import { Visit } from 'src/app/domain/visit/visit';
import { VisitService } from 'src/app/services/visit/visit.service';
import { Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { InPatient } from 'src/app/domain/patient/in-patient';
import { PatientService } from 'src/app/services/patient/patient.service';
import { DoctorService } from 'src/app/services/employee/doctor/doctor.service';
import { Doctor } from 'src/app/domain/employee/doctor';

@Component({
  selector: 'app-create-visit',
  templateUrl: './create-visit.component.html',
  styleUrls: ['./create-visit.component.css']
})
export class CreateVisitComponent implements OnInit {

  visit: Visit = new Visit();
  submitted = false;

  //patients
  private patients: InPatient[];
  
  constructor(private visitService:VisitService, private router:Router, private patientService:PatientService) { }

  ngOnInit() {
    this.getPatients();
  }

  getPatients(){
    this.patientService.getAll().subscribe(data => {
      this.patients = data; 
    });
  }

  newDoctor() : void{
    this.submitted = false;
    this.visit = new Visit();
  }

  genId(): Guid{
    return Guid.create();
  }

  save(){

    this.visit.visitId = this.genId().toString();
    this.visitService.createVisit(this.visit).subscribe(data => console.log(data), error => console.log(error));
    this.visit = new Visit();
  }


  getPatient(value:string){

    if(value != '-1'){
      this.visit.patientId = value;
      console.log(value);
    }
    else{
      console.log(value);
    }

  }


  onSubmit(){
    this.submitted = true;
    this.save();
    this.router.navigate(['/visits']);
  }

  cancel(){
    this.router.navigate(['/visits']);
  }

}
