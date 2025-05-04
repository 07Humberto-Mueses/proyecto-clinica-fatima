import DynamicLayouts from "@/components/layouts/DynamicLayouts";

export default function DireccionLayout ({ children }: { children: React.ReactNode }) {
    return (
        <DynamicLayouts>{children}</DynamicLayouts>
    )
}