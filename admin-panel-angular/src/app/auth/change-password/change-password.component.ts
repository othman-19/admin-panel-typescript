import { Component, OnInit } from '@angular/core';
import { CognitoService } from 'cognito-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent implements OnInit {
  oldPassword: string;
  newPassword: string;

  constructor(private cognitoService: CognitoService, private router: Router) {
    this.oldPassword = '';
    this.newPassword = '';
  }

  ngOnInit(): void {}

  async onChange() {
    await this.cognitoService.updatePassword(
      this.oldPassword,
      this.newPassword
    );
    this.router.navigate(['dashboard']);
  }
}
