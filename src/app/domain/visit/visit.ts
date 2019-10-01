import { InPatient } from '../patient/in-patient';
import { Doctor } from '../employee/doctor';

export class Visit {
    visitId:string;
    visitDate:string;
    patientId:string;
    doctorId:string;
    patient:InPatient;
    doctor: Doctor;
    duration: String;
    patientNote: String;
}
