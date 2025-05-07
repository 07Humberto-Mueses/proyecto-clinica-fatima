import React from "react";
import Image from "next/image";

interface CardLiquidacionProps {
    imagen: React.ReactNode;
    title: string;
    valor: string;
    isMin?: boolean;
}

export const CardLiquidacion = ({ imagen, title, valor, isMin = false }: CardLiquidacionProps) => {
    const bgColor = isMin ? "bg-[#93D94E]" : "bg-[#E1523D]";
    return (
        <div className={`items-center justify-center border-[2px] border-gray-300 rounded-xl shadow-lg bg-[#F2F2F2]`}>
            <div className="flex items-center justify-center w-full py-2">
                {typeof imagen === "string" ? (
                    <Image 
                    src={typeof imagen === "string" ? imagen : ""}
                    alt="Logo Empresa"
                    width={80}
                    height={80}
                />
                ) : (imagen)
                }
            </div>
            <div className={`flex flex-col px-3 py-1 items-center rounded-lg justify-center ${bgColor}`}>
                <label htmlFor="text">{title}</label>
                <label htmlFor="text" className="font-bold">Costo: {valor}</label>
            </div>
        </div>
    )
}