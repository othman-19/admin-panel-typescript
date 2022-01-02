export interface License {
  ID: string;
  license: string;
  appID: string;
}

export interface CreateLicense {
  productID: number;
  appID: string;
  customerID: number;
  expiresAt: number;
}