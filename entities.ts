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
}

export interface Location {
  locationId?: string; // O number, según lo que devuelva tu backend
  locationName: string;
  locationAddress?: string;
  locationLatLng?: number[]; // Arreglo para latitud y longitud [lat, lng]
  manager?: Manager;
}