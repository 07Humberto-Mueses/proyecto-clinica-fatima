"use client"
import React from 'react'
import SideNavItem from '@/components/organisms/SideNavItem'
import { informacionNavLinks } from '@/repositories/NavLinks/Apoyo'

export default function informacionLayout ({ children }: { children:React.ReactNode}) {
  return (
    <div className='flex h-screen'>
      <aside className='w-64 h-screen bg-[#F2D8D5]'>
        <SideNavItem navLinks={informacionNavLinks}/>
      </aside>
      <main>
        {children}
      </main>
    </div>
  )
}
