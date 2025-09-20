

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MediconnectRoutingModule } from './mediconnect-routing.module';
import { PatientCreateComponent } from './components/patientcreate/patientcreate.component';
import { DoctorCreateComponent } from './components/doctorcreate/doctorcreate.component';
import { ClinicCreateComponent } from './components/cliniccreate/cliniccreate.component';
import { AppointmentCreateComponent } from './components/appointment/appointment.component';

@NgModule({
  declarations: [
    PatientCreateComponent,
    DoctorCreateComponent,
    ClinicCreateComponent,
    AppointmentCreateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MediconnectRoutingModule
  ]
})
export class MediconnectModule {}
