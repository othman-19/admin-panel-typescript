import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  LoginComponent,
  SignupComponent,
  ForgotPasswordComponent,
  ChangePasswordChallengeComponent,
  ConfirmForgotPasswordComponent,
  ChangePasswordComponent,
  ConfirmSignupComponent,
  ChangeEmailComponent
} from './auth';
import {
  LicenseList,
  AddLicenseForm,
} from "./license"
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'change-email', component: ChangeEmailComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  {
    path: 'change-password-challenge',
    component: ChangePasswordChallengeComponent,
  },
  { path: 'signup', component: SignupComponent },
  { path: 'signup-confirmation', component: ConfirmSignupComponent },

  { path: 'forgot-password', component: ForgotPasswordComponent },
  {
    path: 'confirm-forgot-password',
    component: ConfirmForgotPasswordComponent,
  },
  { path: 'license', component: LicenseList },
  { path: 'new-license', component: AddLicenseForm },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
