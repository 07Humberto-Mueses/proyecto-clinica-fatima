import React from "react";
import Image from "next/image";
import { Button } from "@/components/atoms/Button";
import { FloatingInput } from "@/components/atoms/Input";
import { SocialContainer } from "@/components/molecules/SocialContainer";
import { CardMapa } from "@/components/molecules/CardMapa";
import { LogisticIcon } from "@/components/icons/MapaIcons";
import { CardLiquidacion } from "@/components/molecules/CardLiquidacion";
import { Table } from "@/components/atoms/Table";

export default function LoginPage() {
  return (
    <main className="flex h-screen">
      <div className="relative bg-white-200 w-1/2 h-full overflow-hidden">
        <Image
          src="/imagenLogin.png"
          fill
          className="object-cover opacity-50"
          alt="Captura del proyecto mostrando la version de escritorio"
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
      <div className="w-1/2 h-full flex items-center justify-center p-8">
        {/* <ContainerLogin/> */}
        <div className="w-full max-w-md text-center">
          <h1 className="text-2xl font-semibold mb-4">Iniciar sesión</h1>
          <Button className="mt-4">
            Ingresar
          </Button>
          <FloatingInput
            label="Correo electrónico"
            placeholder="correo"
            type="email"
          />
          <SocialContainer />
          <CardMapa
            title="APOYO"
            icon={<LogisticIcon/>}
            items={[
              "Apoyo Logistico",
              "Docencia Servicio",
              "Gestion Salud",
              "Gestion Informacion",
              "Gestion Juridica",
              "Mantenimiento Hospitalario"
            ]}
          />
          <Table />
          {/* <formLogin/> */}
        </div>
        <CardLiquidacion
            imagen="/LogoClinica2.png"
            title="Glicol y CIA"
            valor="$ 20.000"
          />
      </div>
    </main>
  );
}
