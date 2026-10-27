import { cookies } from "next/headers";
import axios from "axios";
import { API_URL, TOKEN_NAME } from "@/constans";
import { Employee } from "@/entities";

interface EmployeesPageProps {
  searchParams: {
    store?: string;
  };
}

export default async function EmployeePage({ searchParams }: EmployeesPageProps) {
  const store = searchParams.store;

  // Si no hay una tienda seleccionada en la URL
  if (!store) {
    return (
      <div className="p-6">
        <h1 className="text-xl font-semibold">Selecciona una tienda para ver sus empleados.</h1>
      </div>
    );
  }

  const token = cookies().get(TOKEN_NAME)?.value;
  
  let employees: Employee[] = [];

  try {
    const { data } = await axios.get<Employee[]>(`${API_URL}/employees/location/${store}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    employees = data;
  } catch (error) {
    console.error("Error al obtener los empleados:", error);
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Empleados de la Tienda</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {employees.map((employee) => (
          <div key={employee.id} className="p-4 border rounded-xl shadow-sm bg-white dark:bg-zinc-900">
            <p className="font-semibold">
              {employee.employeeName} {employee.employeeLastName}
            </p>
            <p className="text-sm text-gray-500">Email: {employee.employeeEmail}</p>
            <p className="text-sm text-gray-500">Teléfono: {employee.employeePhoneNumber}</p>
          </div>
        ))}
      </div>
    </div>
  );
}