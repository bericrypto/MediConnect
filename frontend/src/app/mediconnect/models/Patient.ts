export class Patient {
    constructor(
      public patientId: number,
      public fullName: string,
      public dateOfBirth: Date,
      public contactNumber: string,
      public email: string,
      public address: string
    ) {}
  
    logAttributes(): void {
      console.log("patientId:", this.patientId);
      console.log("fullName:", this.fullName);
      console.log("dateOfBirth:", this.dateOfBirth);
      console.log("contactNumber:", this.contactNumber);
      console.log("email:", this.email);
      console.log("address:", this.address);
    }
  }
  