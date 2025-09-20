
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      role: ['', Validators.required],

      fullName: ['', Validators.required],
      contactNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      specialty: ['', Validators.required],
      yearsOfExperience: [null, [Validators.required, Validators.min(0), Validators.max(80)]],
      dateOfBirth: [null],
      address: [''],
    });
  }

  onSubmit(): void {
    if (this.registrationForm.invalid) {
      this.successMessage = null;
      this.errorMessage = 'Please fill out all fields correctly.';
      this.registrationForm.markAllAsTouched();
      return;
    }
    this.errorMessage = null;
    this.successMessage = 'Registration successful!';
  }
}
