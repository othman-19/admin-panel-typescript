import { Component, OnInit } from '@angular/core';
import { CognitoService } from 'cognito-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-signup',
  templateUrl: './confirm-signup.component.html',
  styleUrls: ['./confirm-signup.component.css'],
})
export class ConfirmSignupComponent implements OnInit {
  email: string;
  code: string;

  constructor(private cognitoService: CognitoService, private router: Router) {
    this.email = '';
    this.code = '';
  }

  ngOnInit(): void {}

  async onConfirm() {
    await this.cognitoService.confirmSignup(this.email, this.code);
    this.router.navigate(['login']);
  }
}
