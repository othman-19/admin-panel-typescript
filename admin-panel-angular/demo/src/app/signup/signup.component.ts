import { Component, OnInit } from '@angular/core';
import { CognitoService } from 'cognito-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  email: string;
  password: string;
  name: string;

  constructor(private cognitoService: CognitoService, private router: Router) {
    this.email = '';
    this.password = '';
    this.name = '';
  }

  ngOnInit(): void {}

  async onRegister() {
    await this.cognitoService.signup(this.email, this.password, this.name);
    this.router.navigate(['signup-confirmation']);
  }
}
