import { Input } from "@nextui-org/react";
export default function FormNewLocation() {
  async function createLocation(formData: FormData) {
    "use server";
    console.log(formData);
  }

  return (
    <form action={createLocation}>
      <Input label="Nombre de tienda" name="locationName" />
      <button>Subir</button>
    </form>
  );
}