import { Component, OnInit } from '@angular/core';
import { VisitService } from 'src/app/services/visit/visit.service';
import { Router } from '@angular/router';
import { Visit } from 'src/app/domain/visit/visit';
import { InPatient } from 'src/app/domain/patient/in-patient';
import { PatientService } from 'src/app/services/patient/patient.service';

@Component({
  selector: 'app-visit-list',
  templateUrl: './visit-list.component.html',
  styleUrls: ['./visit-list.component.css']
})
export class VisitListComponent implements OnInit {

  private visits: Visit[] = [];
  private patients: InPatient[] = [];
  private matchedPatients: InPatient[] = [];

  private visit:Visit;
  id:string;

  constructor(private visitService:VisitService, private patientService:PatientService, private router:Router) { }

  ngOnInit() {
    this.getVisits();
    this.getPatients();
    this.setActive();
    this.getAllPatientsLinkedWithVisit();

    
  }

  getPatients(){
    this.patientService.getAll().subscribe(data => {
      this.patients = data;
    })
  }

  getVisits(){
    this.visitService.getAll().subscribe(data => {
      this.visits = data;
    });
  }

  getAllPatientsLinkedWithVisit(){

    this.visitService.getAll().subscribe(visits =>{

      this.visits = visits;

      this.patientService.getAll().subscribe(patients =>{

          this.patients = patients;

          for(var i = 0; i < visits.length; i++){
             
            for(var j = 0; j < patients.length; j++){
              if(visits[i].patientId == patients[j].patientId){
                visits[i].patient = patients[j];
              }
            }
          }
      });

    });

  }

  deletePatient(id:string) {
    this.visitService.deleteVisit(id).subscribe(

      data => {
       console.log(data);
       this.getVisits();
      }
    );
  }

  viewVisit(id:string) {

    this.router.navigate(['visits/view']);
    this.visitService.saveId(id);

  }

  setActive(){
    document.getElementById('doctorsLink').classList.remove('active');
    document.getElementById('patientsLink').classList.remove('active');
    document.getElementById('visitsLink').classList.add('active');
  }


}
