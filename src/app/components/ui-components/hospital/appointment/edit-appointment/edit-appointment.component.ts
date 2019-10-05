import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/services/employee/doctor/doctor.service';
import { PatientService } from 'src/app/services/patient/patient.service';
import { AppointmentService } from 'src/app/services/appointment/appointment.service';
import { Appointment } from 'src/app/domain/appointment';

@Component({
  selector: 'app-edit-appointment',
  templateUrl: './edit-appointment.component.html',
  styleUrls: ['./edit-appointment.component.css']
})
export class EditAppointmentComponent implements OnInit {

  appointment:Appointment;
  id:string;
  submitted = false;

  constructor(private appointmentService:AppointmentService, private patientService:PatientService, private router:Router) { }

  ngOnInit() {
    this.getVisitToView();
  }

  getVisitToView(){
    
    this.id = this.appointmentService.getId();

    this.appointmentService.findAppointmentById(this.id).subscribe(data => {

      this.appointment = data;
      
      this.patientService.findPatientById(this.appointment.patientId).subscribe(data => {
        this.appointment.patient = data;
      })

    });
    
  }

  update(){

    this.appointmentService.updateAppointment(this.appointment).subscribe(data => console.log(data), error1 => console.log(error1));
    this.router.navigate(['/appointments']);

  }

  onSubmit(){
    this.submitted = true;
    this.update();
  }

  cancel(){

    this.router.navigate(['/appointments']);

  }

}
