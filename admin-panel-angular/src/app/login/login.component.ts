import { Component, OnDestroy, OnInit } from '@angular/core';
import { CognitoService } from 'cognito-angular';
import { Router } from '@angular/router';
import { Subscription, take, takeUntil, takeWhile } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  private componentAlive;

  email: string;
  password: string;

  constructor(private cognitoService: CognitoService, private router: Router) {
    this.componentAlive = true;
    this.email = '';
    this.password = '';

    this.cognitoService.onChallenge$
      .pipe(takeWhile(() => this.componentAlive))
      .subscribe((challenge) => {
        this.router.navigate(['/change-password-challenge'], {
          state: { challenge },
        });
      });

    this.cognitoService.user$
      .pipe(takeWhile(() => this.componentAlive))
      .subscribe((user) => {
        console.info(`user: `, user);
        if (user) this.router.navigate(['/dashboard']);
      });

    this.cognitoService.onSignIn$
      .pipe(takeWhile(() => this.componentAlive))
      .subscribe(() => this.router.navigate(['/dashboard']));
  }

  async ngOnInit() {
    await this.cognitoService.initCurrentAuthenticatedUser();
  }

  ngOnDestroy() {
    this.componentAlive = false;
  }

  async onLogin() {
    try {
      await this.cognitoService.login(this.email, this.password);
    } catch (e) {
      console.error('login error: ', e);
    }
  }
}
