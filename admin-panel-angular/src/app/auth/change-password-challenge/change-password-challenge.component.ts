import { Component, OnInit } from '@angular/core';
import { CognitoService } from 'cognito-angular';
import { Router } from '@angular/router';
import { UserChallenge } from 'cognito-angular/lib/types';

@Component({
  selector: 'app-change-password-challenge',
  templateUrl: './change-password-challenge.component.html',
  styleUrls: ['./change-password-challenge.component.css'],
})
export class ChangePasswordChallengeComponent implements OnInit {
  name: string;
  newPassword: string;

  private challenge: UserChallenge;

  constructor(private cognitoService: CognitoService, private router: Router) {
    this.name = '';
    this.newPassword = 'Hello123@';
    const state = this.router.getCurrentNavigation()?.extras.state || {};
    this.challenge = state['challenge'];
  }

  ngOnInit(): void {}

  async onChange() {
    this.challenge.userAttributes['name'] = this.name;
    this.challenge.userAttributes['password'] = this.newPassword;
    // await this.cognitoService.updateUserAttributes({ name: this.name });
    await this.cognitoService.completeChallenge(this.challenge);
  }
}
