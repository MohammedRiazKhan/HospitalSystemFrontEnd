import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/ui-components/site-components/nav/nav.component';
import { FooterComponent } from './components/ui-components/site-components/footer/footer.component';
import { CreateVisitComponent } from './components/ui-components/hospital/visit/create-visit/create-visit.component';
import { CreateDoctorComponent } from './components/ui-components/hospital/employee/doctor/create-doctor/create-doctor.component';
import { CreatePatientComponent } from './components/ui-components/hospital/patient/create-patient/create-patient.component';
import { PatientListComponent } from './components/ui-components/hospital/patient/patient-list/patient-list.component';
import { EditPatientComponent } from './components/ui-components/hospital/patient/edit-patient/edit-patient.component';
import { VisitListComponent } from './components/ui-components/hospital/visit/visit-list/visit-list.component';
import { DoctorListComponent } from './components/ui-components/hospital/employee/doctor/doctor-list/doctor-list.component';
import { EditDoctorComponent } from './components/ui-components/hospital/employee/doctor/edit-doctor/edit-doctor.component';
import { ViewVisitComponent } from './components/ui-components/hospital/visit/view-visit/view-visit.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    CreateVisitComponent,
    CreateDoctorComponent,
    CreatePatientComponent,
    PatientListComponent,
    EditPatientComponent,
    VisitListComponent,
    DoctorListComponent,
    EditDoctorComponent,
    ViewVisitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
