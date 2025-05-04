"use client"
import React from 'react'
import Link from 'next/link';
import { FloatingInput } from '../atoms/Input'
import { LogIn } from "lucide-react";
import { Button } from '../atoms/Button'

export default function LoginForm() {  
  return (
    <form className='space-y-2'>
      <div>
        <h1 className='p-5 text-[#590219] text-2xl font-semibold'>
          INICIAR SESÍON
        </h1>
        <div className='flex flex-col items-center justify-center'>
          <div className='w-full'>
            <FloatingInput
              label="Usuario"
              placeholder="Usuario"
              type="text"
              className='text-white m-2 bg-[#585957]'
              required
            />
            <FloatingInput
              label="Contraseña"
              placeholder="Contraseña"
              type="password"
              className='text-white m-2 bg-[#585957]'
              required
              minLength={6}
            />
          </div>
          <div className='flex flex-col items-center justify-end mt-auto mb-4'>
            {/* Por ahora esta cubierto el boton por un Link para que dirija al mapa de navegacion queda pendiente 
            quitar este <Link></Link> y agregar la validacion del login para iniciar sesion y que lleve igual al Mapa  */}
            <Link
              href={"/mapa"}
            >
              <Button
                className='mt-4 gap-2 bg-[#404040] rounded-3xl hover:bg-[#747373] active:bg-[#747373]'
              >
                <LogIn className="ml-auto h-5 w-5 text-white" />Ingresar 
              </ Button>
            </Link>
          </div>
          <Link
            href={"#"}
            className='flex items-center justify-center text-md text-gray-800 hover:text-gray-700'
          >
            <p>Cambiar Contraseña</p>
          </Link>
        </div>
      </div>
    </form>
  )
}
