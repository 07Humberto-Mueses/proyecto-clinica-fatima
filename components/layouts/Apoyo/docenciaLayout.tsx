"use client"
import React from 'react'
import SideNavItem from '@/components/organisms/SideNavItem'
import { docenciaNavLinks } from '@/repositories/NavLinks/Apoyo'

export default function docenciaLayout ({ children }: { children:React.ReactNode}) {
  return (
    <div className='flex h-screen'>
      <aside className='w-64 h-screen bg-[#F2D8D5]'>
        <SideNavItem navLinks={docenciaNavLinks}/>
      </aside>
      <main>
        {children}
      </main>
    </div>
  )
}
