import React from 'react'
import Link from 'next/link'
import { LogoClinica } from '../atoms/LogoClinica'
import { NavLinkItem } from '../molecules/NavLinkItem'
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import { Button } from '../atoms/Button';

export default function SideNav ({ links }: any) {
  return (
    <div className='flex h-full'>
      <Link href="/" className='mb-2 w-[200px]'>
        <div className='w-32'>
          <LogoClinica />
        </div>
      </Link>

      <div className='flex grow flex-col'>
        {links.map((link: any) => (
          <NavLinkItem 
            key={link.name}
            href={link.href}
            icon={link.icon}
            name={link.name}
          />
        ))}

        <form className='h-[48px] w-full grow'>
          <div className='flex flex-col items-center justify-center mt-auto mb-4'>
            <LogOut className='w-6' />
            <Button 
              className='mt-4'
            >
              Salir
            </ Button>
          </div>
        </form>
      </div>
    </div>
  )
}
