import { Component } from '@angular/core';
@Component({
selector: 'app-patient-create',
templateUrl: './patientcreate.component.html',
styleUrls: ['./patientcreate.component.scss']
})
export class PatientCreateComponent {
patient: {
patientId: number;
fullName: string;
dateOfBirth: string;
contactNumber: string;
email: string;
address: string;
} = {
patientId: 0,
fullName: '',
dateOfBirth: '',
contactNumber: '',
email: '',
address: ''
};
message: string = '';
isSuccess: boolean = false;
onSubmit(): void {
if (this.isFormValid()) {
this.isSuccess = true;
this.message = 'Patient has been successfully created!';
} else {
this.isSuccess = false;
this.message = 'Please fill out all required fields correctly.';
}
}
isFormValid(): boolean {
const { patientId, fullName, dateOfBirth, contactNumber, email, address } = this.patient;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return (
patientId > 0 && // ✅ must be positive number
fullName.trim() !== '' &&
dateOfBirth.trim() !== '' &&
contactNumber.trim() !== '' &&
emailRegex.test(email) &&
address.trim() !== ''
);
}
resetForm(): void {
this.patient = {
patientId: 0,
fullName: '',
dateOfBirth: '',
contactNumber: '',
email: '',
address: ''
};
this.message = '';
this.isSuccess = false;
}
}