"use Client"
import React from 'react'
import Link from 'next/link'
import LogoClinica from '../atoms/LogoClinica'
import { NavLinkItem } from '../molecules/NavLinkItem'
import { LogOut } from "lucide-react";
import { Button } from '../atoms/Button';
import { useRouter } from 'next/navigation'

interface SubItem {
  name: string;
  href: string;
}

interface NavItemWithSubItems {
  name: string;
  icon?: React.ComponentType<{ className?: string }>;
  subItem: SubItem[];
}

interface NavItemWithoutSubItems {
  name: string;
  href: string;
}

type NavItem = NavItemWithSubItems | NavItemWithoutSubItems;

interface NavLinks {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  items: NavItem[];
}

interface SideNavProps {
  navLinks: NavLinks;
}


export default function SideNavItem({ navLinks }: SideNavProps) {
  const router = useRouter();

  const handleLogout = () => {
      router.push("/mapa");
  }
  return (
    <div className='flex h-full flex-col'>
      <Link href="#" className='flex items-center justify-start'>
        <div className='w-full'>
          <LogoClinica />
        </div>
      </Link>
      <hr className='text-red-900 text-shadow-lg border'/>
      <div className='flex grow flex-col justify-between'>
        <NavLinkItem navLinks={navLinks}/>
        <div className='flex flex-col items-center justify-end mt-auto mb-4'>
          <Button
            className='mt-4 gap-2'
            onClick={handleLogout}
          >
            Salir <LogOut className="ml-auto h-5 w-5 text-white" />
          </ Button>
        </div>
      </div>
    </div>
  )
}
