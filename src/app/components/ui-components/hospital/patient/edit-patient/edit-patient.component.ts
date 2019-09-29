import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/services/patient/patient.service';
import { Router } from '@angular/router';
import { InPatient } from 'src/app/domain/patient/in-patient';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {

  patient:InPatient;
  id:string;

  _patient: InPatient = new InPatient();
  submitted = false;

  constructor(private patientService:PatientService, private router:Router) { }

  ngOnInit() {
    this.getPatientToEdit();
  }

  getPatientToEdit(){
    this.id = this.patientService.getId();
    this.patientService.findPatientById(this.id).subscribe(data =>{

      this.patient = data;

    });
  }

  update(){
    this.patientService.updatePatient(this.patient).subscribe(data => console.log(data), error1 => console.log(error1));
    this.router.navigate(['/patients']);

  }

  onSubmit(){
    this.submitted = true;
    this.update();
  }

  cancel(){

    this.router.navigate(['/patients']);

  }

}
