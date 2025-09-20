// export class Clinic {
//     constructor(
//       public clinicId: number,
//       public clinicName: string,
//       public location: string,
//       public doctorId: number,
//       public contactNumber: string,
//       public establishedYear: number
//     ) {}
  
//     logAttributes(): void {
//       console.log("clinicId:", this.clinicId);
//       console.log("clinicName:", this.clinicName);
//       console.log("location:", this.location);
//       console.log("doctorId:", this.doctorId);
//       console.log("contactNumber:", this.contactNumber);
//       console.log("establishedYear:", this.establishedYear);
//     }
//   }
  


import { Appointment } from './Appointment';
import { Doctor } from './Doctor';

export class Clinic {
  clinicId: number;
  clinicName: string;
  location: string;
  contactNumber: string;
  establishedYear: number;

  // Relationships
  doctors: Doctor[] = [];
  appointments: Appointment[] = [];

  constructor(
    clinicId: number,
    clinicName: string,
    location: string,
    contactNumber: string,
    establishedYear: number
  ) {
    this.clinicId = clinicId;
    this.clinicName = clinicName;
    this.location = location;
    this.contactNumber = contactNumber;
    this.establishedYear = establishedYear;
  }
}
