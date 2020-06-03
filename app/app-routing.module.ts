import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SuccessComponent } from './success/success.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'success',component:SuccessComponent},
  {path:'registration',component:RegistrationComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
