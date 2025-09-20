
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-appointment-create',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentCreateComponent implements OnInit {
  appointmentForm!: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.appointmentForm = this.formBuilder.group({
      appointmentId: [null, [Validators.required, Validators.min(1)]],
      patientId: [null, [Validators.required, Validators.min(1)]],
      clinicId: [null, [Validators.required, Validators.min(1)]],
      appointmentDate: ['', Validators.required],
      status: ['', Validators.required],
      purpose: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  onSubmit(): void {
    if (this.appointmentForm.valid) {
      this.successMessage = 'Appointment successfully created!';
      this.errorMessage = null;
    } else {
      this.errorMessage = 'Please fill out all required fields correctly.';
      this.successMessage = null;
    }
  }

  resetForm(): void {
    this.appointmentForm.reset({
      appointmentId: null,
      patientId: null,
      clinicId: null,
      appointmentDate: '',
      status: '',
      purpose: ''
    });
    this.successMessage = null;
    this.errorMessage = null;
  }
}

