import { Component, OnInit } from '@angular/core';
import { CognitoService } from 'cognito-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  email: string;

  constructor(private cognitoService: CognitoService, private router: Router) {
    this.email = '';
  }

  ngOnInit(): void {}

  async onSubmit() {
    await this.cognitoService.forgotPassword(this.email);
    this.router.navigate(['confirm-forgot-password']);
  }
}
