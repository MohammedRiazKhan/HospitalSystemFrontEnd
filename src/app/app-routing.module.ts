import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientListComponent } from './components/ui-components/hospital/patient/patient-list/patient-list.component';
import { VisitListComponent } from './components/ui-components/hospital/visit/visit-list/visit-list.component';
import { DoctorListComponent } from './components/ui-components/hospital/employee/doctor/doctor-list/doctor-list.component';
import { CreateVisitComponent } from './components/ui-components/hospital/visit/create-visit/create-visit.component';
import { CreatePatientComponent } from './components/ui-components/hospital/patient/create-patient/create-patient.component';
import { EditPatientComponent } from './components/ui-components/hospital/patient/edit-patient/edit-patient.component';
import { CreateDoctorComponent } from './components/ui-components/hospital/employee/doctor/create-doctor/create-doctor.component';
import { EditDoctorComponent } from './components/ui-components/hospital/employee/doctor/edit-doctor/edit-doctor.component';
import { ViewVisitComponent } from './components/ui-components/hospital/visit/view-visit/view-visit.component';


const routes: Routes = [

  {path: '', redirectTo: 'patients', pathMatch: 'full'},
  {path: 'patients', component: PatientListComponent},
  {path: 'visits', component: VisitListComponent},
  {path: 'doctors', component : DoctorListComponent},
  {path: 'doctors/new', component: CreateDoctorComponent},
  {path: 'doctors/edit', component: EditDoctorComponent},
  {path: 'patients/new', component: CreatePatientComponent},
  {path: 'patients/edit', component: EditPatientComponent},
  {path: 'visits/new', component: CreateVisitComponent},
  {path: 'visits/view', component: ViewVisitComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
