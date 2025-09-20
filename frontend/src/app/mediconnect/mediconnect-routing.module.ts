// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { PatientCreateComponent } from './components/patientcreate/patientcreate.component';
// import { DoctorCreateComponent } from './components/doctorcreate/doctorcreate.component';
// import { ClinicCreateComponent } from './components/cliniccreate/cliniccreate.component';
// import { AppointmentCreateComponent } from './components/appointment/appointment.component';

// const routes: Routes = [
//   { path: 'patients/create', component: PatientCreateComponent },
//   { path: 'doctors/create', component: DoctorCreateComponent },
//   { path: 'clinics/create', component: ClinicCreateComponent },
//   { path: 'appointments/create', component: AppointmentCreateComponent }
// ];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class MediconnectRoutingModule {}



import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PatientEditComponent } from './components/patientedit/patientedit.component';
import { DoctorEditComponent } from './components/doctoredit/doctoredit.component';
import { ClinicEditComponent } from './components/clinicedit/clinicedit.component';
import { AppointmentCreateComponent } from './components/appointment/appointment.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'patient-edit', component: PatientEditComponent },
  { path: 'doctor-edit', component: DoctorEditComponent },
  { path: 'clinic-edit/:id', component: ClinicEditComponent },
  { path: 'appointment', component: AppointmentCreateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediconnectRoutingModule {}


