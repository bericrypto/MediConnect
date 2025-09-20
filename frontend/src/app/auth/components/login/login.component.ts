
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  successMessage: string|null =null;
  errorMessage: string|null=null;
  constructor(private fb: FormBuilder,private authService:AuthService,private router:Router) {
    this.loginForm = this.fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-zA-Z0-9]+$/) 
        ]
      ],
      email: ['', [Validators.required,Validators.email]],
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
  ngOnInit(): void {
   
  }
  get username() {return this.loginForm.get('username');}
  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }
  get role() { return this.loginForm.get('role'); }
  onSubmit(): void {
   
    if (this.loginForm.invalid) return;

    this.authService.login(this.loginForm.value).subscribe({
      next: (res) => {
        this.successMessage = 'Login successful!';
        this.errorMessage = null;
        localStorage.setItem('token', res.token || 'dummy-token');
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.errorMessage = err.error || 'Login failed';
        this.successMessage = null;
      },
    });
  }
}


















