<<<<<<< HEAD
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
=======

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-patient-create',
  templateUrl: './patientcreate.component.html',
  styleUrls: ['./patientcreate.component.scss']
})
export class PatientCreateComponent implements OnInit {
  patientForm!: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.patientForm = this.fb.group({
      patientId: [null, [Validators.required, Validators.min(1)]],
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      dateOfBirth: ['', Validators.required],
      contactNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  onSubmit(): void {
    if (this.patientForm.valid) {
      this.successMessage = 'Patient has been successfully created!';
      this.errorMessage = '';
      this.patientForm.reset({
        patientId: null,
        fullName: '',
        dateOfBirth: '',
        contactNumber: '',
        email: '',
        address: ''
      });
    } else {
      this.errorMessage = 'Please fill out all required fields correctly.';
      this.successMessage = '';
    }
  }

  resetForm(): void {
    this.patientForm.reset({
      patientId: null,
      fullName: '',
      dateOfBirth: '',
      contactNumber: '',
      email: '',
      address: ''
    });
    this.successMessage = '';
    this.errorMessage = '';
  }

  // Getters for template
  get patientId() { return this.patientForm.get('patientId'); }
  get fullName() { return this.patientForm.get('fullName'); }
  get dateOfBirth() { return this.patientForm.get('dateOfBirth'); }
  get contactNumber() { return this.patientForm.get('contactNumber'); }
  get email() { return this.patientForm.get('email'); }
  get address() { return this.patientForm.get('address'); }
}
>>>>>>> e12c5e1194646357b89af543b45615487f2537fc
