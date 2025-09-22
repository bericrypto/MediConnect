import { Component, OnInit } from '@angular/core';
import { MediConnectService } from '../../services/mediconnect.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  role: string = '';
  patientId!: number;
  patientDetails: any;
  clinics: any[] = [];
  appointments: any[] = [];
  constructor(private mediConnectService: MediConnectService) {}
  ngOnInit(): void {
    this.role = localStorage.getItem('role') || '';
    if (this.role === 'PATIENT') {
      this.patientId = Number(localStorage.getItem('patient_id'));
      this.loadPatientData();
    }
  }
  loadPatientData(): void {
    if (!this.patientId) return;
    this.mediConnectService.getPatientById(this.patientId).subscribe({
      next: (patient) => {
        this.patientDetails = patient;
      },
      error: () => {
        this.patientDetails = undefined;
      }
    });
    this.mediConnectService.getAppointmentsByPatient(this.patientId).subscribe({
      next: (appointments) => {
        this.appointments = appointments;
      }
    });
    this.mediConnectService.getAllClinics().subscribe({
      next: (clinics) => {
        this.clinics = clinics;
      }
    });
  }
  deletePatient(): void {
    if (confirm('Are you sure you want to delete your profile?')) {
      this.mediConnectService.deletePatient(this.patientId).subscribe(() => {
        this.patientDetails = null;
      });
    }
  }
}