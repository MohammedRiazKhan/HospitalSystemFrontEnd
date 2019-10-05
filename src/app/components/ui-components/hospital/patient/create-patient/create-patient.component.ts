import { Component, OnInit } from '@angular/core';

import { PatientService } from 'src/app/services/patient/patient.service';
import { Router } from '@angular/router';
import { InPatient } from 'src/app/domain/patient/in-patient';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {

  patient: InPatient = new InPatient();
  submitted = false;

  constructor(private patientService:PatientService, private router:Router) { }

  ngOnInit() {
  }

  newDoctor() : void{
    this.submitted = false;
    this.patient = new InPatient();
  }


  save(){

    this.patientService.createPatient(this.patient).subscribe(data => console.log(data), error => console.log(error));
    this.patient = new InPatient();
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
