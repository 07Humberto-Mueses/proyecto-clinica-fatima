"use client"
import React from 'react'
import { Button } from "@/components/atoms/Button"
import { LogoMapa } from "@/components/atoms/LogoMapa"
import { LogIn, Forklift, Waypoints, Hospital, SlidersVertical, FileUser } from "lucide-react";
import { SocialContainer } from "@/components/molecules/SocialContainer"
import { CardMapa } from '@/components/molecules/CardMapa';
import Link from "next/link";

export default function Page() {
  return (
    <div className='flex flex-col h-screen relative overflow-hidden'>
      <div className='absolute top-4 right-4'>
        {/* Por ahora esta cubierto el boton por un Link para que dirija al login de navegacion queda pendiente 
        quitar este <Link></Link> y si es necesario el boton, segun lo que se requira posteriormente  */}
        <Link
          href={"/login"}
        >
          <Button
            className='gap-2'
          >
            <LogIn className="ml-auto h-5 w-5 text-white" />Ingresar
          </Button>
        </Link>
      </div>
      <div className='flex flex-col justify-center items-center gap-8 mt-16 px-4 overflow-y-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-screen-xl mx-auto'>
          <CardMapa
            title='APOYO'
            icon={<Forklift />}
            items={[
              { name: 'Apoyo Logístico', href: "/dashboard/apoyoLogistico" },
              { name: 'Docencia Servicio', href: "/dashboard/docencia" },
              { name: 'Gestión Calidad', href: "/dashboard/calidad" },
              { name: 'Gestión Financiera', href: "/dashboard/financiera" },
              { name: 'Gestión Informacion', href: "/dashboard/informacion" },
              { name: 'Gestión Juridica', href: "/dashboard/juridica" },
              { name: 'Mantenimiento Hospitalario', href: "/dashboard/mantenimiento" },
              { name: 'Talento Humano', href: "/dashboard/talento" },
            ]}
          />
          <div className='w-full justify-center items-center flex flex-col gap-8'>
            <CardMapa
              title='DIRECCIÓN'
              icon={<Waypoints />}
              items={[
                { name: 'Gerencia y dirección', href: "/dashboard/gerenciaDireccion" }
              ]}
            />
            <LogoMapa />
          </div>
          <CardMapa
            title='OPERACION'
            icon={<Hospital />}
            items={[
              { name: 'Ayudas Diagnosticas', href: "/dashboard/diagnosticas" },
              { name: 'Ayudas Terapéuticas', href: "/dashboard/terapeuticas" },
              { name: 'Atencion al Usuario', href: "/dashboard/atencionUsuario" },
              { name: 'Consulta Externa', href: "/dashboard/consultaExterna" },
              { name: 'Internación', href: "/dashboard/internacion" },
              { name: 'Quirofano', href: "/dashboard/quirofano" },
              { name: 'Urgencias', href: "/dashboard/urgencias" },
            ]}
          />
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-screen-lg mx-auto'>
          <CardMapa
            title='CONTROL'
            icon={<SlidersVertical />}
            items={[
              { name: 'Auditoria Contable', href: "/dashboard/auditoriaContable" },
              { name: 'Auditoria Medica', href: "/dashboard/auditoriaMedica" },
            ]}
          />
          <CardMapa
            title='EJE'
            icon={<FileUser />}
            items={[
              { name: 'Gestion de Riesgo', href: "/dashboard/gestionRiesgo" },
              { name: 'Humanizacion', href: "/dashboard/humanizacion" },
              { name: 'Seguridad del Paciente', href: "/dashboard/seguridadPaciente" },
            ]}
          />
        </div>
      </div>
      <div className='flex justify-center items-center mt-8'>
        <SocialContainer />
      </div>
    </div>
  )
}
