
import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common'; 
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router'; 
import { HttpClientModule } from '@angular/common/http'; 
import { DashboardComponent } from './components/dashboard/dashboard.component'; 
import { ClinicCreateComponent } from './components/cliniccreate/cliniccreate.component'; 
import { AppointmentCreateComponent } from './components/appointment/appointment.component'; 
import { PatientEditComponent } from './components/patientedit/patientedit.component'; 
import { DoctorEditComponent } from './components/doctoredit/doctoredit.component'; 
import { ClinicEditComponent } from './components/clinicedit/clinicedit.component'; 
import { MediconnectRoutingModule } from './mediconnect-routing.module'; 
import { PatientCreateComponent } from './components/patientcreate/patientcreate.component'; 
import { DoctorCreateComponent } from './components/doctorcreate/doctorcreate.component'; 
@NgModule({ 
  declarations: [ 
    DashboardComponent, 
    PatientCreateComponent, 
    DoctorCreateComponent, 
    ClinicCreateComponent, 
    AppointmentCreateComponent, 
    PatientEditComponent, 
    DoctorEditComponent, 
    ClinicEditComponent 
  ], 
  imports: [ 
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule, 
    RouterModule, 
    HttpClientModule, 
    MediconnectRoutingModule 
  ], 
  exports: [ 
    DashboardComponent, 
    ClinicCreateComponent, 
    AppointmentCreateComponent, 
    PatientEditComponent, 
    DoctorEditComponent, 
    ClinicEditComponent 
  ] 
}) 
  export class MediConnectModule {}