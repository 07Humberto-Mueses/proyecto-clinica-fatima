"use client"
import SideNavItem from "@/components/organisms/SideNavItem";
import { talentoNavLinks } from "@/repositories/NavLinks/Apoyo";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
        <aside className="w-64 h-screen bg-[#F2D8D5]">
            <SideNavItem navLinks={talentoNavLinks} />
        </aside>
        <main>
            {children}
        </main>
    </div>
  );
}
