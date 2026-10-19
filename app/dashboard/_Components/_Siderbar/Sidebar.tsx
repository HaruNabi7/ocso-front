import { BiHome } from "react-icons/bi";
import { LiaDollySolid } from "react-icons/lia";
import { LuStore, LuUser, LuUsers, LuWheat } from "react-icons/lu";
import NavItem from "./Navitem";

export default function Sidebar() {
  return (
    <nav className="w-[10vw] h-[90vh] bg-pink-300 flex flex-col items-center gap-4 pt-5">
      <NavItem icon={<LuStore className="text-4xl" />} path="/dashboard" />
      <NavItem icon={<LuUser className="text-4xl" />} path="/dashboard/users" />
      <NavItem icon={<LuUsers className="text-4xl" />} path="/dashboard/customers" />
      <NavItem icon={<LuWheat className="text-4xl" />} path="/dashboard/products" />
      <NavItem icon={<LiaDollySolid className="text-4xl" />} path="/dashboard/orders" />
    </nav>
  );
}