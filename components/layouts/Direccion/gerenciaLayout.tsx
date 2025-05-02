"use client"
import React from 'react'
import SideNavItem from '@/components/organisms/SideNavItem'
import { gerenciaNavLinks } from '@/repositories/NavLinks/Direccion'

export default function gerenciaLayout ({ children }: { children:React.ReactNode}) {
  return (
    <div className='flex h-screen'>
      <aside className='w-64 h-screen bg-[#F2D8D5]'>
        <SideNavItem navLinks={gerenciaNavLinks}/>
      </aside>
      <main>
        {children}
      </main>
    </div>
  )
}
