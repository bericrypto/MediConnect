import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
 
import { PatientCreateComponent } from './components/patientcreate/patientcreate.component';
import { DoctorCreateComponent } from './components/doctorcreate/doctorcreate.component';
import { ClinicCreateComponent } from './components/cliniccreate/cliniccreate.component';
 
@NgModule({
  declarations: [
    PatientCreateComponent,
    DoctorCreateComponent,
    ClinicCreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    PatientCreateComponent,
    DoctorCreateComponent,
    ClinicCreateComponent
  ]
})
export class MediconnectModule {}