import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MediConnectService } from '../../services/mediconnect.service';

@Component({
  selector: 'app-clinic-edit',
  templateUrl: './clinicedit.component.html',
  styleUrls: ['./clinicedit.component.scss']
})
export class ClinicEditComponent implements OnInit {
  clinicForm!: FormGroup;
  clinicId!: number;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private service: MediConnectService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.clinicId = Number(this.route.snapshot.paramMap.get('id'));
    this.initForm();

    if (this.clinicId) {
      this.service.getAllClinics().subscribe({
        next: (clinics) => {
          const clinic = clinics.find((c) => c.clinicId === this.clinicId);
          if (clinic) this.clinicForm.patchValue(clinic);
        },
        error: () => {
          this.errorMessage = 'Failed to load clinic details.';
        }
      });
    }
  }

  initForm(): void {
    this.clinicForm = this.fb.group({
      clinicName: ['', Validators.required],
      location: ['', Validators.required],
      contactNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      establishedYear: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.clinicForm.valid) {
      this.service.updateClinic(this.clinicId, this.clinicForm.value).subscribe({
        next: () => {
          this.successMessage = 'Clinic updated successfully!';
          this.errorMessage = null;
          setTimeout(() => this.router.navigate(['/dashboard']), 1500);
        },
        error: () => {
          this.errorMessage = 'Update failed. Please try again.';
          this.successMessage = null;
        }
      });
    }
  }
}