"use client"
import React from 'react'
import SideNavItem from '@/components/organisms/SideNavItem'
import { apoyoLogisticoNavLinks } from '@/repositories/NavLinks/Apoyo'

export default function apoyoLogisticoLayout ({ children }: { children:React.ReactNode}) {
  return (
    <div className='flex h-screen'>
      <aside className='w-64 h-screen bg-[#F2D8D5]'>
        <SideNavItem navLinks={apoyoLogisticoNavLinks}/>
      </aside>
      <main>
        {children}
      </main>
    </div>
  )
}
