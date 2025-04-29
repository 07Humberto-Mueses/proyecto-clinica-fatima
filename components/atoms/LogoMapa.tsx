import Image from 'next/image';

export function LogoMapa() {
    return (
        <div>
            <Image
                src="/LogoClinicaLogin.png"
                width={200}
                height={200}
                className="border rounded-md shadow-md shadow-black/30"
                alt="Logo Clinica Fatíma"
            />
        </div>
    )
}