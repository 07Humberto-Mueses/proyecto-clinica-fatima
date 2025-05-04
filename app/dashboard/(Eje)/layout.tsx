import DynamicLayouts from "@/components/layouts/DynamicLayouts";

export default function EjeLayout({ children }: { children: React.ReactNode }) {
    return (
        <DynamicLayouts>{children}</DynamicLayouts>
    )
}