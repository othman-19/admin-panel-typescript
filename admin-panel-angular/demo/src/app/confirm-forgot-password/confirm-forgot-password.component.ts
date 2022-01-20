import { Component, OnInit } from '@angular/core';
import { CognitoService } from 'cognito-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-forgot-password',
  templateUrl: './confirm-forgot-password.component.html',
  styleUrls: ['./confirm-forgot-password.component.css'],
})
export class ConfirmForgotPasswordComponent implements OnInit {
  email: string;
  password: string;
  code: string;

  constructor(private cognitoService: CognitoService, private router: Router) {
    this.email = '';
    this.password = '';
    this.code = '';
  }

  ngOnInit(): void {}

  async onSubmit() {
    await this.cognitoService.confirmForgotPassword(
      this.email,
      this.code,
      this.password
    );
    this.router.navigate(['login']);
  }
}
