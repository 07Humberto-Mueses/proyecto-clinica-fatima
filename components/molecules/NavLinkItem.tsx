"use client"
import Link from 'next/link';
import { ChevronRight } from "lucide-react";
import { useState } from 'react';
import { motion } from 'framer-motion';
import React from 'react';

// Define los tipos de datos esperados como props
interface SubItem {
    name: string;
    href: string;
}

interface NavItemWhithSubItems {
    name: string;
    icon?: React.ComponentType<{ className?: string }>;
    subItem: SubItem[];
}

interface NavItemWhithoutSubItems {
    name: string;
    href: string;
}

type NavItem = NavItemWhithSubItems | NavItemWhithoutSubItems;

interface NavLinks {
    name: string;
    icon: React.ComponentType<{ className?: string }>;
    items: NavItem[];
}

interface NavLinkItemProps {
    navLinks: NavLinks;
}

export function NavLinkItem({ navLinks }: NavLinkItemProps) {
    const [openMenu, setOpenMenu] = useState<string | null>(null);

    const toggleMenu = (menuName: string | null) => {
        setOpenMenu(openMenu === menuName ? null : menuName);
    };
    return (
        <>
            <div>
                <p className='flex h-[48px] items-center justify-center bg-[#A6382E] gap-2 p-3 text-sm text-white font-semibold md:flex-none md:justify-center md:p-2 md:px-3'>
                    {navLinks.icon && <navLinks.icon className="w-6" />}
                    {navLinks.name}
                </p>
            </div>
            <div className='mt-3 ml-2 mr-2'>
                {navLinks.items.map((link) => {
                    const LinkIcon = "icon" in link ? link.icon : undefined;
                    if ("subItem" in link) {
                        const isOpen = openMenu === link.name;

                        return (
                            <div key={link.name}>
                                <button
                                    className={`flex w-full items-center gap-2 rounded-md text-base
                                        ${isOpen ? "bg-[#D9ABA7]" : "bg-[#F2D8D5]"} 
                                        hover:bg-[#D9ABA7] md:p-1 md:px-2`}
                                    onClick={() => toggleMenu(link.name)}
                                >
                                    <div className="flex h-[48px] grow items-center justify-start mx-[10px] gap-2 rounded-md text-sm font-medium">
                                        {LinkIcon && <LinkIcon className="w-5" />}
                                        <p className='hidden md:block'>{link.name}</p>
                                    </div>
                                    <ChevronRight className={`ml-auto h-5 w-5 text-black md:block rotate-90 ${isOpen ? "transform rotate-90" : ""}`} />
                                </button>

                                <motion.ul
                                    initial={false}
                                    animate={{ height: isOpen ? "auto" : 0 }}
                                    className="flex flex-col overflow-hidden mr-8 ml-10 mt-1 items-start transition-all duration-300 text-xs justify-center z-50"
                                >
                                    {link.subItem.map((item) => (
                                        <li key={item.name} className='flex items-center justify-start gap-2 pr-2 hover:bg-[#D9ABA7] w-full p-1 rounded-md'>
                                            {LinkIcon && <LinkIcon className='w-5' />}
                                            <Link href={item.href} className='block w-full'>
                                                <p className='hidden md:block items-start'>{item.name}</p>
                                            </Link>
                                        </li>
                                    ))}
                                </motion.ul>
                            </div>
                        );
                    } else {
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="flex w-full items-center rounded-md text-base hover:bg-[#D9ABA7] md:p-1 md:px-2"
                            >
                                <div className="flex h-[48px] grow items-center justify-start mx-[10px] gap-2 rounded-md text-sm font-medium">
                                    {navLinks.icon && <navLinks.icon className="w-5" />}
                                    <p className='hidden md:block'>{link.name}</p>
                                </div>
                            </Link>
                        );
                    }
                })}
            </div>
        </>
    )
}