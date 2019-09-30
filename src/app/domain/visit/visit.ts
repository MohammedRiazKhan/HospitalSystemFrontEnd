import { InPatient } from '../patient/in-patient';

export class Visit {
    visitId:string;
    visitDate:string;
    patientId:string;
    doctorId:string;
    patient:InPatient;
}
