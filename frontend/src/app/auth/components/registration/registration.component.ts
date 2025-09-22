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

      username: [ 

        '', 

        [ 

          Validators.required, 

          Validators.pattern(/^[a-zA-Z0-9]+$/) // no special chars 

        ] 

      ], 

      email: ['', [Validators.required, Validators.email]], 

      password: [ 

        '', 

        [ 

          Validators.required, 

          Validators.minLength(8), 

          Validators.pattern(/^(?=.*[A-Z])(?=.*\d).+$/) 

        ] 

      ], 

      role: ['', Validators.required] 

    }); 

  } 

 

  get username() { return this.registrationForm.get('username'); } 

  get email() { return this.registrationForm.get('email'); } 

  get password() { return this.registrationForm.get('password'); } 

  get role() { return this.registrationForm.get('role'); } 

 

  onSubmit(): void { 

    if (this.registrationForm.valid) { 

      // Mock backend success 

      this.successMessage = 'Registration successful!'; 

      this.errorMessage = null; 

      console.log('Registration Data:', this.registrationForm.value); 

      this.registrationForm.reset(); 

    } else { 

      this.errorMessage = 'Please fill all required fields correctly.'; 

      this.successMessage = null; 

      this.registrationForm.markAllAsTouched(); 

    } 

  } 

} 