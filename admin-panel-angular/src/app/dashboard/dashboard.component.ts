import { Component, OnInit } from '@angular/core';
import { CognitoService } from 'cognito-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private cognitoService: CognitoService, private router: Router) {}

  ngOnInit(): void {
    this.cognitoService.onSignOut$.subscribe(() => {
      console.info(`on logout`);
      this.router.navigate(['/login']);
    });
  }

  async onLogout() {
    await this.cognitoService.logout();
  }

  async onRefreshToken() {
    await this.cognitoService.refreshSession();
  }
}
