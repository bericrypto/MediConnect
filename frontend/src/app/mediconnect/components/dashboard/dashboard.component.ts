import { Component, OnInit } from '@angular/core';
import { MediConnectService } from '../../services/mediconnect.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  doctorId!: number;
  doctorDetails: any;
  clinics: any[] = [];
  selectClinicAppointments: any[] = [];
  constructor(private mediConnectService: MediConnectService) {}
  ngOnInit(): void {
    this.doctorId = Number(localStorage.getItem('doctor_id')) || 1;
    this.loadDoctorData();
  }
  loadDoctorData(): void {
    // Fetch doctor details
    this.mediConnectService.getDoctorById(this.doctorId).subscribe({
      next: (doctor) => {
        this.doctorDetails = doctor;
      },
      error: () => {
        this.doctorDetails = undefined;
      }
    });
    // Fetch clinics separately (not nested)
    this.mediConnectService.getClinicsByDoctorId(this.doctorId).subscribe({
      next: (clinics) => {
        this.clinics = clinics;
      }
    });
  }
  loadAppointments(clinicId: number): void {
    this.mediConnectService.getAppointmentsByClinic(clinicId).subscribe((appointments) => {
      this.selectClinicAppointments = appointments;
    });
  }
}