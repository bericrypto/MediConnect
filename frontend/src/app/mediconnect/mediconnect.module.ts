<<<<<<< HEAD
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
=======
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MediConnectRoutingModule } from "./mediconnect-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
    
  ]
})
export class MediconnectModule {}
>>>>>>> e12c5e1194646357b89af543b45615487f2537fc
