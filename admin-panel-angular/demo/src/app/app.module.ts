import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ChangePasswordChallengeComponent } from './change-password-challenge/change-password-challenge.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignupComponent } from './signup/signup.component';
//import { CognitoModule } from './cognito';
// import {
//   CognitoConfig,
//   CognitoConfigService,
// } from './cognito/cognito-config.service';
import { tap } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConfirmForgotPasswordComponent } from './confirm-forgot-password/confirm-forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ConfirmSignupComponent } from './confirm-signup/confirm-signup.component';
import { ChangeEmailComponent } from './change-email/change-email.component';
import {
  CognitoConfig,
  CognitoConfigService,
  CognitoModule,
} from 'cognito-angular';

// export function cognitoConfigFactory(
//   httpClient: HttpClient,
//   configService: CognitoConfigService
// ) {
//   }
// }

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChangePasswordChallengeComponent,
    ForgotPasswordComponent,
    SignupComponent,
    DashboardComponent,
    ConfirmForgotPasswordComponent,
    ChangePasswordComponent,
    ConfirmSignupComponent,
    ChangeEmailComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    CognitoModule.forRoot('VERBOSE'),
    FormsModule,
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
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
