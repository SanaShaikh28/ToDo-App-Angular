/**Purpose:This is routing module contains path of every component to be routed
 * @author: SANA SHAIKh
 * @since: 9/April/2018
 */

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';

const routes: Routes = [
  {path:'',redirectTo: 'login',pathMatch: 'full'},
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login' ,component:LoginComponent},
  {path:'forgetpassword', component:ForgotpasswordComponent},
  {path:'resetpassword', component:ResetpasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
 
  exports: [RouterModule]
})
export class AppRoutingModule { }
