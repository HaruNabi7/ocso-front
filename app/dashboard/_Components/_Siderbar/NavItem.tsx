'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavItemProps {
  icon: React.ReactNode;
  path: string;
}

const NavItem = ({ icon, path }: NavItemProps) => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    // la parte donde esta seleccionada el icon se puede cambiar el color de fondo o poner un borde para que se vea que esta seleccionado
    <Link href={path} className={pathName == path ? "bg-pink-500 w-full h-[10vh] flex items-center justify-center" : "w-full h-[10vh] flex items-center justify-center"}>
      {icon}
    </Link>
  );
};

export default NavItem; 