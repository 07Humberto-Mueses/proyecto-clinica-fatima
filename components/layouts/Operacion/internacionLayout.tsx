"use client"
import React from 'react'
import SideNavItem from '@/components/organisms/SideNavItem'
import { internacionNavLinks } from '@/repositories/NavLinks/Operacion'

export default function internacionLayout ({ children }: { children:React.ReactNode}) {
  return (
    <div className='flex h-screen'>
      <aside className='w-64 h-screen bg-[#F2D8D5]'>
        <SideNavItem navLinks={internacionNavLinks}/>
      </aside>
      <main>
        {children}
      </main>
    </div>
  )
}
