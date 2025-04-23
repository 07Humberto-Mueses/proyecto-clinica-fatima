import type { Metadata } from "next";
import Image from "next/image";
import { Marmelad, Nanum_Brush_Script } from "next/font/google";
import "../globals.css";

const geist = Marmelad({
  weight: ["400"],
  variable: "--font-geist",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Clinica Fátima",
  description: "Aplicacion gestion de informacion Clinica Nuestra Señora de Fátima",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geist.variable} antialiased relative w-full h-screen overflow-hidden`}
      >
        <div className="absolute inset-0 z-[-1]">
          <Image
            src="/Fondo/tecnologia.png"
            width={300}
            height={300}
            className="absolute top-20 right-30 opacity-10"
            alt="Fondo"
          />
          <Image
            src="/Fondo/fondoCorazon.png"
            width={150}
            height={150}
            className="absolute top-15 left-15 opacity-10"
            alt="Fondo"
          />
          <Image
            src="/Fondo/fondoLista.png"
            width={380}
            height={380}
            className="absolute bottom-0 left-0 opacity-10"
            alt="Fondo"
          />
        </div>
        {children}
      </body>
    </html>
  );
}
