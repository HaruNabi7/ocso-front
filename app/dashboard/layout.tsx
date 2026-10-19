import Header from "./_Components/Header";
import Siderbar from "./_Components/Sidebar";

export default function LayoutDashboard( { children }: { children: React.ReactNode }){
    return <div className="w-screen h-screen bg-orange-59">
        <Header></Header>
        <div className="flex flex-row items-center">
        <Siderbar></Siderbar>
        {children}
        </div>
        </div>
}