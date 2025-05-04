import DynamicLayouts from "@/components/layouts/DynamicLayouts";

export default function ApoyoLayout({ children }: { children: React.ReactNode }) {
  return (
    <DynamicLayouts>
      {children}
    </DynamicLayouts>
  );
}