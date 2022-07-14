import { NgModule, Component } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { FormulariosComponent } from './formularios/formularios.component';
import { AsistenciaComponent } from './asistencia/asistencia.component';
import { UsuDelegadoComponent } from './usu-delegado/usu-delegado.component';
import { AdminComponent } from './components/admin/admin.component';


const routes: Routes =[
    { path: 'home',             component: HomeComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'register',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'login',          component: LoginComponent },
    { path: 'formulario', component: FormulariosComponent},
    { path: 'asistencia', component: AsistenciaComponent},
    { path: 'user-delegado', component: UsuDelegadoComponent},
    { path: 'admin', component: AdminComponent},

    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
