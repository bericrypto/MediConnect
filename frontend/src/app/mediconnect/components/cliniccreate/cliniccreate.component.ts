import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-clinic-create',
  templateUrl: './cliniccreate.component.html',
  styleUrls: ['./cliniccreate.component.scss']
})
export class ClinicCreateComponent implements OnInit {
  clinicForm!: FormGroup;
  successMessage = '';
  errorMessage = '';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.clinicForm = this.formBuilder.group({
      clinicId: ['', [Validators.required, Validators.min(1)]],
      clinicName: ['', [Validators.required, Validators.minLength(2)]],
      location: ['', Validators.required],
      contactNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      establishedYear: ['', [Validators.required, Validators.pattern(/^(19|20)\d{2}$/)]],
    });
  }

  onSubmit(): void {
    if (this.clinicForm.valid) {
      this.successMessage = 'Clinic has been successfully created!';
      this.errorMessage = '';
      console.log('Clinic Created:', this.clinicForm.value);
    } else {
      this.errorMessage = 'Please fill out all required fields correctly.';
      this.successMessage = '';
    }
  }

  resetForm(): void {
    this.clinicForm.reset();
    this.successMessage = '';
    this.errorMessage = '';
  }
}
