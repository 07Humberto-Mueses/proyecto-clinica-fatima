import Image from "next/image"
import { Alex_Brush, Roboto } from "next/font/google"

const alexBrush = Alex_Brush({
    subsets: ["latin"],
    weight: "400", 
});

const standar = Roboto({
    subsets: ["latin"],
    weight: "400", 
});

export function LogoClinica() {
    return (
        <div className="flex items-center justify-center bg-[#A6382E] relative w-full h-[60px] p-1">
            <Image
                src="/LogoClinica.png"
                width={45}
                height={45}
                className="mb:60 border border-white rounded-full"
                alt="Logo Clinica Fatíma"
            />
            <div className="flex flex-col text-white text-center items-center justify-center text-[9px] w-[200px] h-[100px] ">
                <p className={`${alexBrush.className} text-[12px]`}>
                    Clinica Nuestra Señora de Fátima S.A.
                </p>
                <p className={`${standar.className} text-[9px]`}>
                    Líderes en la Prestación de Servicios de Salud
                </p>
            </div>
        </div>
    )
}