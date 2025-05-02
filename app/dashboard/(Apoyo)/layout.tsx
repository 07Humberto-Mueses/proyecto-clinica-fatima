import DynamicLayoutApoyo from "@/components/layouts/DynamicLayoutApoyo";

export default function ApoyoLayout({ children }: { children: React.ReactNode }) {
  return (
    <DynamicLayoutApoyo>
      {children}
    </DynamicLayoutApoyo>
  );
}