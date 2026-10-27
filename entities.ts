export interface Employee {
  id: string;
  employeeName: string;
  employeeLastName: string;
  employeeEmail: string;
  employeePhoneNumber: string;
}

export interface Location {
  locationId?: string;
  locationName: string;
  manager?: {
    managerId: string;
    managerFullName: string;
  };
}