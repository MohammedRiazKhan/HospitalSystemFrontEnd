import { Component, OnInit } from '@angular/core';
import { Visit } from 'src/app/domain/visit/visit';
import { VisitService } from 'src/app/services/visit/visit.service';
import { Router } from '@angular/router';
import { InPatient } from 'src/app/domain/patient/in-patient';
import { PatientService } from 'src/app/services/patient/patient.service';
import { DoctorService } from 'src/app/services/employee/doctor/doctor.service';
import { Doctor } from 'src/app/domain/employee/doctor';
import { Appointment } from 'src/app/domain/appointment';
import { AppointmentService } from 'src/app/services/appointment/appointment.service';

@Component({
  selector: 'app-create-visit',
  templateUrl: './create-visit.component.html',
  styleUrls: ['./create-visit.component.css']
})
export class CreateVisitComponent implements OnInit {

  visit: Visit = new Visit();
  submitted = false;
  durations: String[] = ['15 min', '30 min', '1 hr', '2 hr', '3 hr', '4 hr'];

  //patients
  private patients: InPatient[];
  //doctors
  private doctors: Doctor[];
  //appointments
  private appointments: Appointment[];

  appointmentToDelete: Appointment = new Appointment();

  days: String[] = [
    '1', '2', '3', '4', '5',
    '6', '7', '8', '9', '10',
    '11', '12', '13', '14', '15',
    '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25',
    '26', '27', '28', '29', '30'
  ];

  months: String[] = [
    'Jan',
    'Feb', 'Mar', 
    'Apr',
    'May',
    'Jun', 'Jul', 
    'Aug',
    'Sep',
    'Oct', 'Nov', 
    'Dec'
  ];

  years: String[] = [
    '2019' 
  ];

  day:string;
  month:string
  year:string;

  
  constructor(private appointmentService:AppointmentService, private visitService:VisitService, private router:Router, private doctorService:DoctorService, private patientService:PatientService) { }

  ngOnInit() {
    this.getPatients();
    this.getDoctors();
    this.getAppointments();
  
  }

  getDoctors(){
    this.doctorService.getAll().subscribe(data => {
      this.doctors = data;
    })
  }

  getPatients(){
    this.patientService.getAll().subscribe(data => {
      this.patients = data; 
    });
  }

  getAppointments(){
    this.appointmentService.getAll().subscribe(data =>{
      this.appointments = data;
      this.patientService.getAll().subscribe(patients =>{

        this.patients = patients;

        for(var i = 0; i < data.length; i++){
          for(var j = 0; j < patients.length; j++){

            if(data[i].patientId == patients[j].patientId){
              data[i].patient = patients[j];
            }

          }
        }

      });
    });
  }

  newDoctor() : void{
    this.submitted = false;
    this.visit = new Visit();
  }

  save(){
    this.visitService.createVisit(this.visit).subscribe(data => console.log(data), error => console.log(error));

    this.appointmentService.deleteAppointment(this.appointmentToDelete.appointmentId).subscribe(data => console.log(data), error => console.log(error));

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

  getDoctor(value:string){

    if(value != '-1'){
      this.visit.doctorId = value;
      console.log(value);
    }
    else{
      console.log(value);
    }

  }

  getDuration(value:string){

    if(value != '-1'){
      this.visit.duration = value;
      console.log(value);
    }
    else{
      console.log(value);
    }

  }

  getAppointment(value:string){

    if(value != '-1'){

      this.appointmentService.findAppointmentById(value).subscribe(data => {

        this.appointmentToDelete = data;

        this.visit.visitDate = data.bookingDate;
        this.visit.patientId = data.patientId;

        this.patientService.findPatientById(data.patientId).subscribe(patientData => {

          this.visit.patient = patientData;

        });
      });

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


  getDay(value:string){

    if(value != '-1'){
      console.log(value);
      this.day = value;
    }

  }

  getMonth(value:string){

    if(value != '-1'){
      console.log(value);
      this.month = value;
    }

  }

  getYear(value:string){

    if(value != '-1'){
      console.log(value);
      this.year = value;
    }

  }

  getFullDate() : string{
    return this.day + ' ' + this.month + ' ' + this.year;
  }

}
