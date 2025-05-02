"use client"
import React from 'react'
import SideNavItem from '@/components/organisms/SideNavItem'
import { auditoriaContableNavLinks } from '@/repositories/NavLinks/Control'

export default function auditoriaContableLayout ({ children }: { children:React.ReactNode}) {
  return (
    <div className='flex h-screen'>
      <aside className='w-64 h-screen bg-[#F2D8D5]'>
        <SideNavItem navLinks={auditoriaContableNavLinks}/>
      </aside>
      <main>
        {children}
      </main>
    </div>
  )
}
