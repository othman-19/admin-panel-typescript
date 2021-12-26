export interface Licence {
  _id: string;
}

export interface CreateLicence {
  productID: number;
  appID: string;
  customerID: number;
  expiresAt: number;
}