"use client"
import Link from 'next/link';
import { UserRoundCog, Barcode, Container, ChevronRight, Forklift } from "lucide-react";
import { useState } from 'react';
import { motion } from 'framer-motion';

const navLinks = {
    name: "Apoyo Logistico",
    icon: Forklift,
    items: [
        {
            name: "Apoyo Logistico", 
            icon: UserRoundCog, 
            subItem: [
                { name: "Formatos", href: "#" },
                { name: "Caracterizacion", href: "#" },
                { name: "Documentos", href: "#" },
            ]
        },
        {
            name: "Compras", 
            icon: Barcode, 
            subItem: [
                { name: "Formatos", href: "#" },
                { name: "Caracterizacion", href: "#" },
                { name: "Documentos", href: "#" },
            ]
        },
        {
            name: "Gestion Ambiental", 
            icon: Container, 
            subItem: [
                { name: "Formatos", href: "#" },
                { name: "Caracterizacion", href: "#" },
                { name: "Documentos", href: "#" },
            ]
        },
    ]
}

export function NavLinkItem() {
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
                    const LinkIcon = link.icon;
                    const isOpen = openMenu === link.name;
                    return (
                        <div key={link.name}>
                            <button
                                className={`flex w-full items-center gap-2 rounded-md text-base
                                    ${isOpen ? "bg-[#D9ABA7]" : "bg-[#F2D8D5]"} 
                                    hover:bg-[#D9ABA7] md:p-1 md:px-2`}
                                onClick={() => toggleMenu(link.name)}
                            >
                                <div className="flex h-[48px] grow items-center justify-start mx-[15px] gap-2 rounded-md text-sm font-medium">
                                    {LinkIcon && <LinkIcon className="w-5" />}
                                    <p className='hidden md:block'>{link.name}</p>
                                </div>
                                <ChevronRight className={`ml-auto h-5 w-5 text-black md:block rotate-90 ${isOpen ? "transform rotate-90" : ""}`} />
                            </button>

                            <motion.ul
                                initial={false}
                                animate={{ height: isOpen ? "auto" : 0 }}
                                className="flex flex-col overflow-hidden mr-15 ml-15 mb-1 items-start transition-all duration-300 text-xs justify-center z-50"
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
                })}
            </div>
        </>
    )
}