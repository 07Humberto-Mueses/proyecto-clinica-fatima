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
              'Apoyo Logístico',
              'Docencia Servicio',
              'Gestión Calidad',
              'Gestión Financiera',
              'Gestión Informacion',
              'Gestión Juridica',
              'Mantenimiento Hospitalario',
              'Talento Humano',
            ]}
          />
          <div className='w-full justify-center items-center flex flex-col gap-8'>
            <CardMapa
              title='DIRECCIÓN'
              icon={<Waypoints />}
              items={[
                'Gerencia y dirección'
              ]}
            />
            <LogoMapa />
          </div>
          <CardMapa
            title='OPERACION'
            icon={<Hospital />}
            items={[
              'Ayudas Diagnosticas',
              'Ayudas Terapéuticas',
              'Atencion al Usuario',
              'Consulta Externa',
              'Internación',
              'Quirofano',
              'Urgencias',
            ]}
          />
        </div>
        <div className='flex justify-center items-center w-full gap-15'>
          <CardMapa
            title='CONTROL'
            icon={<SlidersVertical />}
            items={[
              'Auditoria Contable',
              'Auditoria Medica',
            ]}
          />
          <CardMapa
            title='EJE'
            icon={<FileUser />}
            items={[
              'Gestion de Riesgo',
              'Humanizacion',
              'Seguridad del Paciente',
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
