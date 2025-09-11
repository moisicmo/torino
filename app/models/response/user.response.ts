import type { AddressModel, StaffModel, CustomerModel } from "..";

export interface UserModel {
  id: string;
  numberDocument: string;
  typeDocument: string;
  name: string;
  lastName: string | null;
  email: string;
  phone?: string[];
  staff?: StaffModel;
  customer?:CustomerModel;
  address?: AddressModel;
}
