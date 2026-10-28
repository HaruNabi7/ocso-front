export interface Employee {
  id: string;
  employeeName: string;
  employeeLastName: string;
  employeeEmail: string;
  employeePhoneNumber: string;
}

export interface Manager {
  managerId: string;
  managerFullName: string;
  managerEmail?: string;
  managerPhoneNumber?: string;
  managerSalary?: number;
  location?: Location;   
}

export interface Location {
  locationId?: string;
  locationName: string;
  locationAddress?: string;
  locationLatLng?: number[];
  manager?: Manager;
}
export interface Provider {
  providerId: string;
  providerName: string;
  providerEmail: string;
  providerPhoneNumber: string;
  products: Product[]
}

export interface Product {
  productId: string;
  productName: string;
  price: number;
  countSeal: number;
  provider: Provider
}