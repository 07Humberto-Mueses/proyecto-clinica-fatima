import React from 'react'
import { Button } from "@/components/atoms/Button"
import { LogoMapa } from "@/components/atoms/LogoMapa"
import { LogIn, Forklift, Waypoints, Hospital, SlidersVertical, FileUser } from "lucide-react";
import { SocialContainer } from "@/components/molecules/SocialContainer"
import { CardMapa } from '@/components/molecules/CardMapa';

export default function Page() {
  return (
    <div className='flex flex-col h-screen relative overflow-hidden'>
      <div className='absolute top-4 right-4'>
        <Button
          className='gap-2'

        >
          <LogIn className="ml-auto h-5 w-5 text-white" />Ingresar
        </Button>
      </div>
      <div className='flex flex-col justify-center items-center gap-4 mt-16 px-2 overflow-y-auto'>
        <div className='flex justify-between items-center gap-20 w-full max-w-4xl'>
          <CardMapa
            title='APOYO'
            icon={<Forklift />}
            items={[
              { name: 'Apoyo Logístico', href: "/dashboard/apoyoLogistico" },
              { name: 'Docencia Servicio', href: "/dashboard/calidad" },
              { name: 'Gestión Calidad', href: "/dashboard/docencia" },
              { name: 'Gestión Financiera', href: "/dashboard/financiera" },
              { name: 'Gestión Informacion', href: "/dashboard/informacion" },
              { name: 'Gestión Juridica', href: "/dashboard/juridica" },
              { name: 'Mantenimiento Hospitalario', href: "/dashboard/mantenimiento" },
              { name: 'Talento Humano', href: "/dashboard/talento"},
            ]}
          />
          <div className='w-full justify-center items-center flex flex-col gap-8'>
            <CardMapa
              title='DIRECCIÓN'
              icon={<Waypoints />}
              items={[
                { name: 'Gerencia y dirección', href: "/dashboard/Direcccion" }
              ]}
            />
            <LogoMapa />
          </div>
          <CardMapa
            title='OPERACION'
            icon={<Hospital />}
            items={[
              { name: 'Ayudas Diagnosticas', href: "/dashboard/Operacion" },
              { name: 'Ayudas Terapéuticas', href: "/dashboard/Operacion" },
              { name: 'Atencion al Usuario', href: "/dashboard/Operacion" },
              { name: 'Consulta Externa', href: "/dashboard/Operacion" },
              { name: 'Internación', href: "/dashboard/Operacion" },
              { name: 'Quirofano', href: "/dashboard/Operacion" },
              { name: 'Urgencias', href: "/dashboard/Operacion" },
            ]}
          />
        </div>
        <div className='flex justify-center items-center w-full gap-15'>
          <CardMapa
            title='CONTROL'
            icon={<SlidersVertical />}
            items={[
              { name: 'Auditoria Contable', href: "/dashboard/Control" },
              { name: 'Auditoria Medica', href: "/dashboard/Control" },
            ]}
          />
          <CardMapa
            title='EJE'
            icon={<FileUser />}
            items={[
              { name:'Gestion de Riesgo', href: "/dashboard/Eje" },
              { name:'Humanizacion', href: "/dashboard/Eje" },
              { name:'Seguridad del Paciente', href: "/dashboard/Eje" },
            ]}
          />
        </div>
      </div>
      <div className='flex justify-center items-center mt-4'>
        <SocialContainer />
      </div>
    </div>
  )
}
