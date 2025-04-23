import SideNav from "@/components/organisms/SideNav";
import { UserRoundCog, Barcode, Container  } from "lucide-react";

const navLinks = [
  { name: "Apoyo Logistico", href: "/", icon: UserRoundCog },
  { name: "Compras y Logistica", href: "/", icon: Barcode },
  { name: "Gestion Ambiental", href: "/", icon: Container },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
        <aside className="w-64 h-screen bg-[#F2D8D5] text-black p-4">
            <SideNav 
              links={navLinks}
            />
        </aside>
        <main>
            {children}
        </main>
    </div>
  );
}
