import { BiHome } from "react-icons/bi";
import { LiaDollySolid } from "react-icons/lia";
import { LuStore, LuUser, LuUsers, LuWheat } from "react-icons/lu";
import NavItem from "./NavItem";

//Prueba de direcciones :D
export default function Sidebar() {
  return (
    <nav className="w-[10vw] h-[90vh] bg-pink-300 flex flex-col items-center gap-4 pt-5 justify-center gap-8">
      <NavItem icon={<LuStore className="text-4xl" />} path="/dashboard" />
      <NavItem icon={<LuUser className="text-4xl" />} path="/dashboard/providers" />
      <NavItem icon={<LuUsers className="text-4xl" />} path="/dashboard/products" />
      <NavItem icon={<LuWheat className="text-4xl" />} path="/dashboard/managers" />
      <NavItem icon={<LiaDollySolid className="text-4xl" />} path="/dashboard/employees" />
    </nav>
  );
}