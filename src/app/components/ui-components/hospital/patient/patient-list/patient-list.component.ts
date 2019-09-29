import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/domain/patient/patient';
import { PatientService } from 'src/app/services/patient/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  private patients: Patient[];

  private patient:Patient;
  id:number;

  constructor(private patientService:PatientService, private router:Router) { }

  ngOnInit() {
    
    this.getPatients();
    this.setActive();

  }

  getPatients(){
    this.patientService.getAll().subscribe(data => {
      this.patients = data;
    });
  }

  deletePatient(id:number) {
    this.patientService.deletePatient(id).subscribe(

      data => {
       console.log(data);
       this.getPatients();
      }
    );
  }

  setActive(){
    document.getElementById('doctorsLink').classList.remove('active');
    document.getElementById('patientsLink').classList.add('active');
    document.getElementById('visitsLink').classList.remove('active');
  }

}
