'use client';

import Link from "next/link";
import React from "react";

interface NavItemProps {
  icon: React.ReactNode;
  path: string;
}

const NavItem = ({ icon, path }: NavItemProps) => {
  return (
    <Link href={path}>
      {icon}
    </Link>
  );
};

export default NavItem;