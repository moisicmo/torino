import type { AddressModel, RoleModel, UserModel } from "..";

export interface StaffModel {
  id: string;
  role: RoleModel;
  numberDocument: string;
  typeDocument: string;
  name: string;
  lastName: string | null;
  email: string;
  phone?: string[];
  staff?: StaffModel;
  address?: AddressModel;
}
