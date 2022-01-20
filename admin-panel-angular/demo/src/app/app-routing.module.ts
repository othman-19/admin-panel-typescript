import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordChallengeComponent } from './change-password-challenge/change-password-challenge.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConfirmForgotPasswordComponent } from './confirm-forgot-password/confirm-forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ConfirmSignupComponent } from './confirm-signup/confirm-signup.component';
import { ChangeEmailComponent } from './change-email/change-email.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
