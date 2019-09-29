import { Component, OnInit } from '@angular/core';
import { VisitService } from 'src/app/services/visit/visit.service';
import { Router } from '@angular/router';
import { Visit } from 'src/app/domain/visit/visit';

@Component({
  selector: 'app-visit-list',
  templateUrl: './visit-list.component.html',
  styleUrls: ['./visit-list.component.css']
})
export class VisitListComponent implements OnInit {

  private visits: Visit[];

  private visit:Visit;
  id:string;

  constructor(private visitService:VisitService, private router:Router) { }

  ngOnInit() {
    
    this.getVisits();
    this.setActive();

  }

  getVisits(){
    this.visitService.getAll().subscribe(data => {
      this.visits = data;
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
