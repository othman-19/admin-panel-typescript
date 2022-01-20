import { Component, OnInit } from '@angular/core';
import { CognitoService } from 'cognito-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-email',
  templateUrl: './change-email.component.html',
  styleUrls: ['./change-email.component.css'],
})
export class ChangeEmailComponent implements OnInit {
  email: string;

  constructor(private cognitoService: CognitoService, private router: Router) {
    this.email = '';
  }

  ngOnInit(): void {}

  async onChange() {
    await this.cognitoService.updateUserAttributes({ email: this.email });
    this.router.navigate(['dashboard']);
  }
}
