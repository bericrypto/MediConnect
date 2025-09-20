

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[A-Z])(?=.*\d).+$/)
      ]],
      role: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      contactNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      specialty: ['', Validators.required],
      yearsOfExperience: ['', [Validators.required, Validators.min(1)]]
    });
  }

  onSubmit(): void {
    if (this.registrationForm.invalid) return;

    this.authService.createUser(this.registrationForm.value).subscribe({
      next: (res) => {
        this.successMessage = res;
        this.errorMessage = null;
        this.registrationForm.reset();
      },
      error: (err) => {
        this.errorMessage = err.error || 'Registration failed';
        this.successMessage = null;
      }
    });
  }
}



