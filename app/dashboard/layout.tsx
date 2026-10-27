"use client";

import { usePathname } from "next/navigation";
import Header from "./_Components/Header";
import Sidebar from "./_Components/_Siderbar/Sidebar";

export default function LayoutDashboard({
  children,
  locations,
}: Readonly<{
  children: React.ReactNode;
  locations: React.ReactNode;
}>) {
  const path = usePathname();

  return (
    <div className="bg-orange-50">
      <Header />
      <div className="flex flex-row items-center">
        <Sidebar />
        {children}
        {path === "/dashboard" ? locations : null}
      </div>
    </div>
  );
}