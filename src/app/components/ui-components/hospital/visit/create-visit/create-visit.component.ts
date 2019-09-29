import { Component, OnInit } from '@angular/core';
import { Visit } from 'src/app/domain/visit/visit';
import { VisitService } from 'src/app/services/visit/visit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-visit',
  templateUrl: './create-visit.component.html',
  styleUrls: ['./create-visit.component.css']
})
export class CreateVisitComponent implements OnInit {

  visit: Visit = new Visit();
  submitted = false;

  constructor(private visitService:VisitService, private router:Router) { }

  ngOnInit() {
  }

  newDoctor() : void{
    this.submitted = false;
    this.visit = new Visit();
  }

  save(){
    //implement this with the use of the visit service to pass this in
  }

  onSubmit(){
    this.submitted = true;
    this.save();
    this.router.navigate(['/visits']);
  }

  cancel(){
    this.router.navigate(['/visits']);
  }

}
