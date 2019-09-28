import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material';
import { NavComponent } from './components/ui-components/site-components/nav/nav.component';
import { FooterComponent } from './components/ui-components/site-components/footer/footer.component';
import { CreateVisitComponent } from './components/ui-components/hospital/visit/create-visit/create-visit.component';
import { CreateAppointmentComponent } from './components/ui-components/hospital/appointment/create-appointment/create-appointment.component';
import { CreateDoctorComponent } from './components/ui-components/hospital/employee/doctor/create-doctor/create-doctor.component';
import { CreatePatientComponent } from './components/ui-components/hospital/patient/create-patient/create-patient.component';
import { PatientListComponent } from './components/ui-components/hospital/patient/patient-list/patient-list.component';
import { EditPatientComponent } from './components/ui-components/hospital/patient/edit-patient/edit-patient.component';
import { VisitListComponent } from './components/ui-components/hospital/visit/visit-list/visit-list.component';
import { AppointmentListComponent } from './components/ui-components/hospital/appointment/appointment-list/appointment-list.component';
import { DoctorListComponent } from './components/ui-components/hospital/employee/doctor/doctor-list/doctor-list.component';
import { ReportComponent } from './components/ui-components/hospital/patient/report/report.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    CreateVisitComponent,
    CreateAppointmentComponent,
    CreateDoctorComponent,
    CreatePatientComponent,
    PatientListComponent,
    EditPatientComponent,
    VisitListComponent,
    AppointmentListComponent,
    DoctorListComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
