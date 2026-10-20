import { count } from "console";
import Header from "./_Components/Header";
import Sidebar from "./_Components/_Siderbar/Sidebar";

export default function DashboardLayout({
  children, 
  count,
}: {
  children: React.ReactNode;
  count : React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 bg-pink-200">
          {children}
          {count}
        </main>
      </div>
    </div>
  );
}