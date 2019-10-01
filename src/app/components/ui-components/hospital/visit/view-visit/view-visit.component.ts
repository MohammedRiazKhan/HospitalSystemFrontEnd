import { Component, OnInit } from '@angular/core';
import { Visit } from 'src/app/domain/visit/visit';
import { VisitService } from 'src/app/services/visit/visit.service';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/services/patient/patient.service';
import { DoctorService } from 'src/app/services/employee/doctor/doctor.service';

@Component({
  selector: 'app-view-visit',
  templateUrl: './view-visit.component.html',
  styleUrls: ['./view-visit.component.css']
})
export class ViewVisitComponent implements OnInit {

  visit:Visit;
  id:string;
  submitted = false;

  constructor(private visitService:VisitService, private patientService:PatientService, private doctorService:DoctorService, private router:Router) { }

  ngOnInit() {
    this.getVisitToView();
  }

  getVisitToView(){
    
    this.id = this.visitService.getId();

    this.visitService.findVisitById(this.id).subscribe(data => {

      this.visit = data;
      
      this.patientService.findPatientById(this.visit.patientId).subscribe(data => {
        this.visit.patient = data;
      })

      this.doctorService.findDoctorById(this.visit.doctorId).subscribe(data => {
        this.visit.doctor = data;
      })

    });
    
  }

  update(){

    this.visitService.updateVisit(this.visit).subscribe(data => console.log(data), error1 => console.log(error1));
    this.router.navigate(['/visits']);

  }

  onSubmit(){
    this.submitted = true;
    this.update();
  }

  cancel(){

    this.router.navigate(['/visits']);

  }
  
}
