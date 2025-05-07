import React from "react";
import Image from "next/image";
import { SocialContainer } from "@/components/molecules/SocialContainer";
import LoginForm from "@/components/molecules/LoginForm";

export default function Page() {
  return (
    <main className="flex h-screen">
      <div className="relative bg-white-200 w-1/2 h-full overflow-hidden">
        <Image
          src="/imagenLogin2.png"
          fill
          className="object-cover opacity-50"
          alt="Captura del proyecto mostrando la version de escritorio"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <Image
            src="/LogoClinica.png"
            width={140}
            height={140}
            className="mb:60"
            alt="Logo Clinica Fatíma"
          />
          <Image
            src="/letrasClinica.png"
            width={500}
            height={100}
            className="mb:60"
            alt="Letras Clinica Fatíma"
          />
          <p className="max-w-xl text-2xl semibold p-6 m-4">
            Ser la empresa lider en la prestación de servicios de salud del suroccidente colombiano, certificada, acreditada, con alta tecnología y el mejor equipo humano
          </p>
        </div>        
      </div>
      <div className="w-1/2 h-full flex flex-col items-center justify-between p-20">
        {/* <ContainerLogin/> */}
        <div className="w-full max-w-sm text-center bg-[#D9D9D9] p-8 rounded-3xl shadow-md shadow-black/30">
          <LoginForm />
        </div>
        <div className="w-full flex flex-col items-center justify-end mt-auto -mb-13">
          <SocialContainer />
        </div>
      </div>
    </main>
  );
}
