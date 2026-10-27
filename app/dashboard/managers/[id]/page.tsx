import { API_URL } from "@/constans";
import { authHeaders } from "@/helpers/authHeaders";
import { Manager } from "@/entities";
import ManagerCard from "@/app/dashboard/_Components/ManagerCard";
import type { ComponentType } from "react";

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
  const ManagerCardWithManager = ManagerCard as ComponentType<{ manager: Manager }>;
    return (
        <div>
            <ManagerCardWithManager manager={data} />
        </div>
  );
}