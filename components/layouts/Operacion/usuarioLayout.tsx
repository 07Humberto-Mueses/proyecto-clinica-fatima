"use client"
import React from 'react'
import SideNavItem from '@/components/organisms/SideNavItem'
import { usuarioNavLinks } from '@/repositories/NavLinks/Operacion'

export default function usuarioLayout ({ children }: { children:React.ReactNode}) {
  return (
    <div className='flex h-screen'>
      <aside className='w-64 h-screen bg-[#F2D8D5]'>
        <SideNavItem navLinks={usuarioNavLinks}/>
      </aside>
      <main>
        {children}
      </main>
    </div>
  )
}
