import { Image } from "@nextui-org/react";

export default function Header(){
    return(
        <div className="w-screen h-[10vh] bg-pink-500 flex flex-row items-center px-10">
            
            <img src="/2560px-Oxxo_Logo.svg" width={100} alt="Ocsso-logo" draggable={false} />
        </div>
    )
}
