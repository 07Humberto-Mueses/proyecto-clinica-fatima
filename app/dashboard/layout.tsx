import SideNav from "@/components/organisms/SideNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
        <aside className="w-64 h-screen bg-[#F2D8D5]">
            <SideNav />
        </aside>
        <main>
            {children}
        </main>
    </div>
  );
}
