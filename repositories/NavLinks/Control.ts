import { UserRoundCog, ShieldEllipsis, SquareEqual, FolderKanban } from "lucide-react";

export const auditoriaContableNavLinks = {
    name: "Auditoria Contable",
    icon: ShieldEllipsis,
    items: [
        { name: "Caracterizacion y Descriptivo", href: "#" },
        { name: "Documentos", href: "#" },
        { name: "Formatos", href: "#" },
    ]
}

export const auditoriaMedicaNavLinks = {
    name: "Auditoria Medica",
    icon: UserRoundCog,
    items: [
        {
            name: "Auditoria de Cuentas Medicas", 
            icon: FolderKanban, 
            subItem: [
                { name: "Caracterizacion y Descriptivo", href: "#" },
                { name: "Formatos", href: "#" },
            ]
        },
        {
            name: "Auditoria Medica de Calidad", 
            icon: SquareEqual, 
            subItem: [
                { name: "Caracterizacion y Descriptivo", href: "#" },
                { name: "Formatos", href: "#" },
                { name: "Documentos", href: "#" },
            ]
        },
    ]
}