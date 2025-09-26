import { Doctor } from './Doctor';

export class Clinic {
    clinicId: number;
    clinicName: string;
    location: string;
    contactNumber: string;
    establishedYear: number;
    doctor: Doctor;

    constructor(
        clinicId: number,
        clinicName: string,
        location: string,
        contactNumber: string,
        establishedYear: number,
        doctor: Doctor
    ) {
        this.clinicId = clinicId;
        this.clinicName = clinicName;
        this.location = location;
        this.contactNumber = contactNumber;
        this.establishedYear = establishedYear;
        this.doctor = doctor;
    }
}
