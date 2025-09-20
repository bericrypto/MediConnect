import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientCreateComponent } from './components/patientcreate/patientcreate.component';
import { DoctorCreateComponent } from './components/doctorcreate/doctorcreate.component';
import { ClinicCreateComponent } from './components/cliniccreate/cliniccreate.component';
import { AppointmentCreateComponent } from './components/appointment/appointment.component';

const routes: Routes = [
  { path: 'patients/create', component: PatientCreateComponent },
  { path: 'doctors/create', component: DoctorCreateComponent },
  { path: 'clinics/create', component: ClinicCreateComponent },
  { path: 'appointments/create', component: AppointmentCreateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediconnectRoutingModule {}
