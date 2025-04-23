import React from "react";
import Image from "next/image";

interface CardLiquidacionProps {
    imagen: React.ReactNode;
    title: string;
    valor: string;
}

export const CardLiquidacion = ({ imagen, title, valor }: CardLiquidacionProps) => {
    return (
        <div className="items-center justify-center border-[2px] border-gray-300 bg-white rounded-xl shadow-lg">
            <div className="flex items-center justify-center w-full py-2">
                <Image 
                    src={typeof imagen === "string" ? imagen : ""}
                    alt="Logo Empresa"
                    width={80}
                    height={80}
                />
            </div>
            <div className="flex flex-col px-3 py-1 items-center justify-center bg-[#93D94E]">
                <label htmlFor="">{title}</label>
                <label htmlFor="" className="font-bold">Costo: {valor}</label>
            </div>
        </div>
    )
}