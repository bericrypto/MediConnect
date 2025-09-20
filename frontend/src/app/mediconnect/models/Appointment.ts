// export class Appointment {
//     constructor(
//       public appointmentId: number,
//       public patientId: number,
//       public clinicId: number,
//       public appointmentDate: Date,
//       public status: string,
//       public purpose: string
//     ) {}
  
//     logAttributes(): void {
//       console.log("appointmentId:", this.appointmentId);
//       console.log("patientId:", this.patientId);
//       console.log("clinicId:", this.clinicId);
//       console.log("appointmentDate:", this.appointmentDate);
//       console.log("status:", this.status);
//       console.log("purpose:", this.purpose);
//     }
//   }
  

import { Clinic } from './Clinic';
import { Doctor } from './Doctor';
import { User } from './User';

export class Appointment {
  appointmentId: number;
  patientId: number;
  clinic: Clinic;
  doctor: Doctor;
  appointmentDate: string;
  status: string;
  purpose: string;

  constructor(
    appointmentId: number,
    patientId: number,
    clinic: Clinic,
    doctor: Doctor,
    appointmentDate: string,
    status: string,
    purpose: string
  ) {
    this.appointmentId = appointmentId;
    this.patientId = patientId;
    this.clinic = clinic;
    this.doctor = doctor;
    this.appointmentDate = appointmentDate;
    this.status = status;
    this.purpose = purpose;
  }
}
