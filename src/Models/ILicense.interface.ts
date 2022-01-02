export interface License {
  ID: string;
}

export interface CreateLicense {
  productID: number;
  appID: string;
  customerID: number;
  expiresAt: number;
}