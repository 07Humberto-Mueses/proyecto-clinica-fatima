"use client"
import React from 'react'
import SideNavItem from '@/components/organisms/SideNavItem'
import { riesgoNavLinks } from '@/repositories/NavLinks/Eje'

export default function riesgoLayout ({ children }: { children:React.ReactNode}) {
  return (
    <div className='flex h-screen'>
      <aside className='w-64 h-screen bg-[#F2D8D5]'>
        <SideNavItem navLinks={riesgoNavLinks}/>
      </aside>
      <main>
        {children}
      </main>
    </div>
  )
}
