
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-array',
  templateUrl: './doctorarray.component.html',
  styleUrls: ['./doctorarray.component.scss']
})
export class DoctorArrayComponent implements OnInit {
  doctors: any[] = [];
  showDetails: boolean = false;

  ngOnInit(): void {
    this.doctors = [
      { fullName: 'Dr. Jane Smith', specialty: 'Cardiology', contactNumber: '111-111-1111', email: 'jane.smith@example.com', yearsOfExperience: 10 },
      { fullName: 'Dr. John Doe', specialty: 'Orthopedics', contactNumber: '222-222-2222', email: 'john.doe@example.com', yearsOfExperience: 8 },
      { fullName: 'Dr. Emily Johnson', specialty: 'Pediatrics', contactNumber: '333-333-3333', email: 'emily.johnson@example.com', yearsOfExperience: 12 }
    ];
  }

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }
}
