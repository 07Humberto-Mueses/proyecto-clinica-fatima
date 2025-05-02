import React from 'react'
import { CheckIcon } from '../icons/MapaIcons';
import Link from 'next/link';

interface CardMapaProps {
  title: string;
  icon: React.ReactNode;
  items: { name: string; href: string }[];
}

export const CardMapa = ({ title, icon, items }: CardMapaProps) => {
  return (
    <div className='bg-white rounded-2xl shadow-md w-full max-w-xs'>
      <h1 className='bg-[#FFAAAA] font-bold px-4 py-2 rounded-t-2xl flex items-center justify-center gap-2'>
        {icon}
        {title}
      </h1>
      <ul className='text-left px-4 py-3 space-y-2'>
        {items.map((item, idx) => (
          <Link
            key={item.name}
            href={item.href}
          >
            <li key={idx} className='flex gap-2 items-center'>
              <CheckIcon />
              {item.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}
