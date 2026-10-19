// carpeta donde establecemos reglas de la interfaz, donde no se podra visualizar

import { Image } from "@nextui-org/react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-orange-200 w-screen overflow-hidden min-h-screen flex flex-col items-center justify-center">
      <div className="place-content-center place-self-center">
        <Image 
          src="/2560px-Oxxo_Logo.svg" 
          alt="Logo de Ocso" 
          width={300} 
        />
        {children}
      </div>
    </div>
  );
}