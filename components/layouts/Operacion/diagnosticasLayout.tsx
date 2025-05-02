"use client"
import React from 'react'
import SideNavItem from '@/components/organisms/SideNavItem'
import { diagnosticasNavLinks } from '@/repositories/NavLinks/Operacion'

export default function diagnosticasLayout ({ children }: { children:React.ReactNode}) {
  return (
    <div className='flex h-screen'>
      <aside className='w-64 h-screen bg-[#F2D8D5]'>
        <SideNavItem navLinks={diagnosticasNavLinks}/>
      </aside>
      <main>
        {children}
      </main>
    </div>
  )
}
