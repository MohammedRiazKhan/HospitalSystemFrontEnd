import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/domain/employee/doctor';
import { DoctorService } from 'src/app/services/employee/doctor/doctor.service';
import { Router } from '@angular/router';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-create-doctor',
  templateUrl: './create-doctor.component.html',
  styleUrls: ['./create-doctor.component.css']
})
export class CreateDoctorComponent implements OnInit {

  doctor: Doctor = new Doctor();
  submitted = false;

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
    '1996', '1997', '1998',
    '1999', '2000', '2001', '2002', '2003',
    '2004', '2005', '2006', '2007', '2008',
    '2009', '2010', '2011', '2012', '2013',
    '2014', '2015', '2016', '2017', '2018',
    '2019' 
  ];

  day:string;
  month:string
  year:string;

  constructor(private doctorService:DoctorService, private router:Router) { }

  ngOnInit() {
  }

  newDoctor() : void{
    this.submitted = false;
    this.doctor = new Doctor();
  }

  genId(): Guid{
    return Guid.create();
  }

  save(){
    this.doctor.employeeId = this.genId().toString();
    this.doctor.employmentDate = this.getFullDate();
    console.log(this.getFullDate());
    this.doctorService.createDoctor(this.doctor).subscribe(data => console.log(data), error => console.log(error));
    this.doctor = new Doctor();
  }

  onSubmit(){
    this.submitted = true;
    this.save();
    this.router.navigate(['/doctors']);
  }

  cancel(){
    this.router.navigate(['/doctors']);
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
