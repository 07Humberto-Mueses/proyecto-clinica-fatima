export default function MapaLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex bg-gray-200 h-screen">
            <main>
                {children}
            </main>
        </div>
    )
}