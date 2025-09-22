import { NgModule } from '@angular/core'; 

import { CommonModule } from '@angular/common'; 

import { ReactiveFormsModule, FormsModule } from '@angular/forms'; 

 

import { LoginComponent } from './components/login/login.component'; 

import { RegistrationComponent } from './components/registration/registration.component'; 

 

@NgModule({ 

  declarations: [ 

    LoginComponent, 

    RegistrationComponent 

  ], 

  imports: [ 

    CommonModule, 

    ReactiveFormsModule, 

    FormsModule 

  ], 

  exports: [ 

    LoginComponent, 

    RegistrationComponent 

  ] 

}) 

export class AuthModule {} 