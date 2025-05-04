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
import AuditoriaContableLayout from "./Control/auditoriaContableLayout"
import AuditoriaMedicaLayout from "./Control/auditoriaMedicaLayout"
import GerenciaLayout from "./Direccion/gerenciaLayout";
import HumanizacionLayout from "./Eje/humanizacionLayout";
import PacienteLayout from "./Eje/pacienteLayout";
import RiesgoLayout from "./Eje/riesgoLayout";
import ConsultaLayout from "./Operacion/consultaLayout";
import DiagnosticasLayout from "./Operacion/diagnosticasLayout";
import InternacionLayout from "./Operacion/internacionLayout";
import QuirofanoLayout from "./Operacion/quirofanoLayout";
import TerapeuticasLayout from "./Operacion/terapeuticasLayout";
import UrgenciasLayout from "./Operacion/urgenciasLayout";
import UsuarioLayout from "./Operacion/usuarioLayout";

const layoutMap: { [key: string]: React.ComponentType<{ children: React.ReactNode }> } = {
  "/dashboard/apoyoLogistico": ApoyoLogisticoLayout,
  "/dashboard/calidad": CalidadLayout,
  "/dashboard/docencia": DocenciaLayout,
  "/dashboard/financiera": FinancieraLayout,
  "/dashboard/informacion": InformacionLayout,
  "/dashboard/juridica": JuridicaLayout,
  "/dashboard/mantenimiento": MantenimientoLayout,
  "/dashboard/talento": TalentoLayout,
  "/dashboard/auditoriaContable": AuditoriaContableLayout,
  "/dashboard/auditoriaMedica": AuditoriaMedicaLayout,
  "/dashboard/gerenciaDireccion": GerenciaLayout,
  "/dashboard/humanizacion": HumanizacionLayout,
  "/dashboard/seguridadPaciente": PacienteLayout,
  "/dashboard/gestionRiesgo": RiesgoLayout,
  "/dashboard/consultaExterna": ConsultaLayout,
  "/dashboard/diagnosticas": DiagnosticasLayout,
  "/dashboard/internacion": InternacionLayout,
  "/dashboard/quirofano": QuirofanoLayout,
  "/dashboard/terapeuticas": TerapeuticasLayout,
  "/dashboard/urgencias": UrgenciasLayout,
  "/dashboard/atencionUsuario": UsuarioLayout
};

export default function DynamicLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const matchedEntry = Object.entries(layoutMap).find(([route]) =>
    pathname === route || pathname.startsWith(route + "/")
  );

  if (matchedEntry) {
    const LayoutComponent = matchedEntry[1];
    return <LayoutComponent>{children}</LayoutComponent>;
  }

  return <div>Navegador no encontrado.</div>;
}
