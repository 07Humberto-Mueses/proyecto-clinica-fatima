"use client"
import React from 'react'
import SideNavItem from '@/components/organisms/SideNavItem'
import { mantenimientoNavLinks } from '@/repositories/NavLinks/Apoyo'

export default function mantenimientoLayout ({ children }: { children:React.ReactNode}) {
  return (
    <div className='flex h-screen'>
      <aside className='w-64 h-screen bg-[#F2D8D5]'>
        <SideNavItem navLinks={mantenimientoNavLinks}/>
      </aside>
      <main>
        {children}
      </main>
    </div>
  )
}
