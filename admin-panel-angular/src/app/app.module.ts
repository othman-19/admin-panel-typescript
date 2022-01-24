import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as API from '../api/licenseService';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { tap } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import {
  CognitoConfig,
  CognitoConfigService,
  CognitoModule,
} from 'cognito-angular';
import {
  LoginComponent,
  SignupComponent,
  ForgotPasswordComponent,
  ChangePasswordChallengeComponent,
  ConfirmForgotPasswordComponent,
  ChangePasswordComponent,
  ConfirmSignupComponent,
  ChangeEmailComponent,
} from './auth';
import { NavbarComponent } from './UI/navbar/navbar.component'

import { LicenseList, AddLicenseForm } from './license';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    ChangePasswordChallengeComponent,
    ForgotPasswordComponent,
    SignupComponent,
    DashboardComponent,
    ConfirmForgotPasswordComponent,
    ChangePasswordComponent,
    ConfirmSignupComponent,
    ChangeEmailComponent,
    LicenseList,
    AddLicenseForm
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    CognitoModule.forRoot('VERBOSE'),
    FormsModule,
    NgbModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory:
        (httpClient: HttpClient, configService: CognitoConfigService) => () =>
          httpClient.get('./assets/cognito.config.json').pipe(
            tap((value) => {
              configService.set(value as CognitoConfig);
            })
          ),
      deps: [HttpClient, CognitoConfigService],
      multi: true,
    },
    API.LicensingApi,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
