import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';  
import { MediConnectModule } from './mediconnect/mediconnect.module';
import { PatientSampleComponent } from './mediconnect/components/patientsample/patientsample.component';
import { DoctorSampleComponent } from './mediconnect/components/doctorsample/doctorsample.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    PatientSampleComponent,   // ✅ standalone component goes in imports
    DoctorSampleComponent,
    MediConnectModule 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}