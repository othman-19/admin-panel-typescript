import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
