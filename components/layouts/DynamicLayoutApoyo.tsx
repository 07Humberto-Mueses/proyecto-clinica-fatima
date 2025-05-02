"use client";

import React from "react";
import { usePathname } from "next/navigation";

import CalidadLayout from "./Apoyo/calidadLayout";
import MantenimientoLayout from "./Apoyo/mantenimientoLayout";
import ApoyoLogisticoLayout from "./Apoyo/apoyoLogisticoLayout";
import DocenciaLayout from "./Apoyo/docenciaLayout";
import FinancieraLayout from "./Apoyo/financieraLayout";
import InformacionLayout from "./Apoyo/informacionLayout";
import JuridicaLayout from "./Apoyo/juridicaLayout";
import TalentoLayout from "./Apoyo/talentoLayout";

const layoutMap: { [key: string]: React.ComponentType<{ children: React.ReactNode }> } = {
  "/dashboard/apoyoLogistico": ApoyoLogisticoLayout,
  "/dashboard/calidad": CalidadLayout,
  "/dashboard/docencia": DocenciaLayout,
  "/dashboard/financiera": FinancieraLayout,
  "/dashboard/informacion": InformacionLayout,
  "/dashboard/juridica": JuridicaLayout,
  "/dashboard/mantenimiento": MantenimientoLayout,
  "/dashboard/talento": TalentoLayout,
};

export default function DynamicLayoutManager({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  console.log("Pathname actual:", pathname);
  console.log("LayoutMap keys:", Object.keys(layoutMap));

  const matchedEntry = Object.entries(layoutMap).find(([route]) =>
    pathname === route || pathname.startsWith(route + "/")
  );

  console.log("Matched entry:", matchedEntry);
  if (matchedEntry) {
    const LayoutComponent = matchedEntry[1];
    return <LayoutComponent>{children}</LayoutComponent>;
  }

  return <div>Layout no encontrado.</div>;
}
