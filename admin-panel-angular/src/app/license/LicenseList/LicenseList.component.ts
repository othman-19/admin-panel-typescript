import { Component, Injectable, OnInit } from '@angular/core';
import * as API from '../../../api/licenseService';
import { LicenseInfo } from '../../../api/licenseService';

const licenseAPI = new API.LicensingApi

@Injectable()
@Component({
  selector: 'license-list',
  templateUrl: './LicenseList.component.html',
  styleUrls: ['./LicenseList.component.css'],
})

export class LicenseList implements OnInit {
  licenses: LicenseInfo [];
  constructor(private licenseList: API.LicensingApi) {}

  ngOnInit(): void {
    this.fetchLicenses();
  }

  ngOnDelete(licence: LicenseInfo): void {
    this.deleteLicense(licence);
  }

  private async fetchLicenses() {
    try {
      this.licenses  = (await licenseAPI.licenseList()).items
    } catch (error) {
      console.log(error)
    }
  }

  private async deleteLicense(licence: LicenseInfo) {
    try {
      await licenseAPI.deleteLicense(licence.ID);
      this.fetchLicenses();
    }catch (error) {
      console.log(error)
    }
  }
}
