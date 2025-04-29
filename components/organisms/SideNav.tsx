import React from 'react'
import Link from 'next/link'
import { LogoClinica } from '../atoms/LogoClinica'
import { NavLinkItem } from '../molecules/NavLinkItem'
import { LogOut } from "lucide-react";
import { Button } from '../atoms/Button';

export default function SideNav() {
  return (
    <div className='flex h-full flex-col'>
      <Link href="#" className='flex items-center justify-start'>
        <div className='w-full'>
          <LogoClinica />
        </div>
      </Link>
      <hr className='text-red-900 text-shadow-lg border'/>
      <div className='flex grow flex-col justify-between'>
        <NavLinkItem />
        <div className='flex flex-col items-center justify-end mt-auto mb-4'>
          <Button
            className='mt-4 gap-2'
          >
            Salir <LogOut className="ml-auto h-5 w-5 text-white" />
          </ Button>
        </div>
      </div>
    </div>
  )
}
