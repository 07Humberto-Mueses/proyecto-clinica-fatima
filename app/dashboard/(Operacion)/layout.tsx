import DynamicLayouts from "@/components/layouts/DynamicLayouts";

export default function OperacionLayout ({ children }: { children: React.ReactNode }) {
    return (
        <DynamicLayouts>{children}</DynamicLayouts>
    )
}