export interface License {
  _id: string;
}

export interface CreateLicense {
  productID: number;
  appID: string;
  customerID: number;
  expiresAt: number;
}