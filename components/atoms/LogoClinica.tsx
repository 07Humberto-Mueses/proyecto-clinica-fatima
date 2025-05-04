import Image from "next/image"

export default function LogoClinica() {
    return (
        <div className="flex items-center justify-center bg-[#A6382E] relative w-full h-[60px]">
            <Image
                src="/LogoSideNav.jpg"
                quality={100}
                fill
                className="mb:60"
                alt="Logo Clinica Fatíma"
            />
        </div>
    )
}