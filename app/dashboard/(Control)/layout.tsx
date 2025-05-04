import DynamicLayouts from "@/components/layouts/DynamicLayouts";

export default function ControlLayout({ children }: { children: React.ReactNode }) {
    return (
        <DynamicLayouts>{children}</DynamicLayouts>
    )
}