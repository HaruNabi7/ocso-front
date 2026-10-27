import { API_URL } from "@/constans";
import { authHeaders } from "@/helpers/authHeaders";
import { Manager } from "@/entities";
import type { ComponentType } from "react";
import ManagerCard from "../_Components/ManagerCard";
import DeleteManagerButton from "./_components/DeleteManagerButton";

const ManagerCardWithManager = ManagerCard as unknown as ComponentType<{
  manager: Manager;
}>;

export default async function ManagerPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const response = await fetch(`${API_URL}/managers/${params.id}`, {
    headers: {
      ...authHeaders(),
    },
    next: {
        tags: [`dashboard:managers:${params.id}`]
    }
  });

    const data: Manager = await response.json();
    return (
    <div className="flex flex-col gap-10 flex-grow-0 items-center justify-center">
        <ManagerCardWithManager manager={data} />
    <div className="bg-white shadow-medium rounded-md px-10 py-2">
      <DeleteManagerButton managerId={data.managerId} />
    </div>
  </div>
);
}