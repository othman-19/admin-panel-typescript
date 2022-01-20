import { Component, OnInit } from '@angular/core';
import { CognitoService } from 'cognito-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'license-list',
  templateUrl: './LicenseList.component.html',
  styleUrls: ['./LicenseList.component.css'],
})
export class LicenseList implements OnInit {
  constructor(private cognitoService: CognitoService, private router: Router) {}

  ngOnInit(): void {
    this.fetchLicenses();
  }

  private async fetchLicenses() {
    await this.licenses = await this.getLicenses();
  }
}
