
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  template: `
    <form [formGroup]="registrationForm" (ngSubmit)="onSubmit()" novalidate>
      <!-- Minimal template to compile in tests -->
      <input type="text" formControlName="username" />
      <input type="email" formControlName="email" />
      <input type="password" formControlName="password" />
      <select formControlName="role">
        <option value="">Select role</option>
        <option value="DOCTOR">Doctor</option>
        <option value="PATIENT">Patient</option>
        <option value="ADMIN">Admin</option>
      </select>

      <input type="text" formControlName="fullName" />
      <input type="text" formControlName="contactNumber" />
      <input type="text" formControlName="specialty" />
      <input type="number" formControlName="yearsOfExperience" />
      <input type="date" formControlName="dateOfBirth" />
      <textarea formControlName="address"></textarea>

      <button type="submit">Register</button>

      <p *ngIf="errorMessage" class="error">{{ errorMessage }}</p>
      <p *ngIf="successMessage" class="success">{{ successMessage }}</p>
    </form>
  `,
  styles: [`
    .error { color: #c00; }
    .success { color: #090; }
  `]
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      // These four are explicitly checked for initial ''
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      role: ['', Validators.required],

      // Additional fields used in tests' setValue shape
      fullName: ['', Validators.required],
      // 10-digit number as per your valid case '1234567890'
      contactNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      specialty: ['', Validators.required],
      yearsOfExperience: [null, [Validators.required, Validators.min(0), Validators.max(80)]],

      // Optional in your successful case (they pass null/empty string)
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

    // If valid:
    this.errorMessage = null;
    this.successMessage = 'Registration successful!';
  }
}