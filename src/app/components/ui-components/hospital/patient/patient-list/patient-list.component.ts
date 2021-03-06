import { Component, OnInit } from '@angular/core';
import { InPatientPatient } from 'src/app/domain/patient/patient';
import { PatientService } from 'src/app/services/patient/patient.service';
import { Router } from '@angular/router';
import { InPatient } from 'src/app/domain/patient/in-patient';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  private patients: InPatient[];

  private patient:InPatient;
  id:string;

  constructor(private patientService:PatientService, private loginService:LoginService, private router:Router) { }

  ngOnInit() {
    
    this.getPatients();
    this.setActive();
    this.loginService.unhide();

  }

  getPatients(){
    this.patientService.getAll().subscribe(data => {
      this.patients = data;
    });
  }

  deletePatient(id:string) {
    this.patientService.deletePatient(id).subscribe(

      data => {
       console.log(data);
       this.getPatients();
      }
    );
  }

  editPatient(id:string) {

    this.router.navigate(['/patients/edit']);
    this.patientService.saveId(id);

  }

  setActive(){
    document.getElementById('doctorsLink').classList.remove('active');
    document.getElementById('patientsLink').classList.add('active');
    document.getElementById('visitsLink').classList.remove('active');
  }

}
