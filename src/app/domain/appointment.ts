import { InPatient } from './patient/in-patient';

export class Appointment{
    appointmentId:string;
    bookingDate:string;
    patientId:string;
    patient:InPatient;
}