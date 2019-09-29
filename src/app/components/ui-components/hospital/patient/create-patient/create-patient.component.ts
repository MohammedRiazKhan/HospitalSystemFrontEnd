import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/domain/patient/patient';
import { PatientService } from 'src/app/services/patient/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {

  patient: Patient = new Patient();
  submitted = false;

  constructor(private patientService:PatientService, private router:Router) { }

  ngOnInit() {
  }

  newDoctor() : void{
    this.submitted = false;
    this.patient = new Patient();
  }

  save(){
    //implement this with the use of the doctor service to pass this in
  }

  onSubmit(){
    this.submitted = true;
    this.save();
    this.router.navigate(['/patients']);
  }

  cancel(){
    this.router.navigate(['/patients']);
  }

}
