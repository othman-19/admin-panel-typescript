import { Component, Injectable, OnInit } from '@angular/core';
import { CognitoService } from 'cognito-angular';
import { Router } from '@angular/router';
import * as API from '../../../api/licenseService';

import { CreateLicenseInput, LicenseInfo } from '../../../api/licenseService';

const licenseAPI = new API.LicensingApi


@Component({
  selector: 'add-license-form',
  templateUrl: './AddLicenseForm.component.html',
  styleUrls: ['./AddLicenseForm.component.css'],
})

@Injectable()

export class AddLicenseForm implements OnInit {

    productID: number;
    appID: string;
    customerID: number;
    expiresAt: number;

  constructor(private LicensingApi: API.LicensingApi, private router: Router) {
    this.productID = 1;
    this.appID = '';
    this.customerID = 0;
    this.expiresAt = 0;
  }
  ngOnInit(): void {}

  async onSubmit() {
    try {
      const body: CreateLicenseInput = {
        productID: this.productID,
        appID: this.appID,
        customerID: this.customerID,
        expiresAt: this.expiresAt,
      }
      console.log(body)
      await this.LicensingApi.createLicense(body);
      this.router.navigate(['license']);
    } catch (error) {
      console.log(error)
    }    
  }
}