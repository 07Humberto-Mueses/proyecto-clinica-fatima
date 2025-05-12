import { UserRoundCog, LetterText, Construction, Container, NotebookPen, CalendarCheck, Forklift, GraduationCap, Scale, ShieldCheck, MonitorCog, FolderSearch, CreditCard, Calculator, BanknoteArrowDown, UserRoundCheck, Briefcase, ChartLine, BookCopy } from "lucide-react";

export const apoyoLogisticoNavLinks = {
    name: "Apoyo Logistico",
    icon: Forklift,
    items: [
        {
            name: "Apoyo Logistico", 
            icon: UserRoundCog, 
            subItem: [
                { name: "Formatos", href: "#" },
            ]
        },
        {
            name: "Compras y Logistica", 
            icon: BanknoteArrowDown, 
            subItem: [
                { name: "Caracterizacion y Descriptivo", href: "#" },
                { name: "Formatos", href: "#" },
                { name: "Documentos", href: "#" },
            ]
        },
        {
            name: "Gestion Ambiental", 
            icon: Container, 
            subItem: [
                { name: "Caracterizacion y Descriptivo", href: "#" },
                { name: "Formatos", href: "#" },
                { name: "Documentos", href: "#" },
            ]
        },
    ]
}

export const docenciaNavLinks = {
    name: "Docencia Servicio",
    icon: GraduationCap,
    items: [
        { name: "Caracterizacion y Descriptivo", href: "#" },
        { name: "Formatos", href: "#" },
        { name: "Documentos", href: "#" },
    ]
}

export const calidadNavLinks = {
    name: "Gestion Calidad",
    icon: ShieldCheck,
    items: [
        { name: "Caracterizacion y Descriptivo", href: "#" },
        { name: "Formatos", href: "#" },
        { name: "Documentos", href: "#" },
    ]
}

export const financieraNavLinks = {
    name: "Gestion Financiera",
    icon: CreditCard,
    items: [
        {
            name: "Admisiones y Facturacion", 
            icon: UserRoundCheck, 
            subItem: [
                { name: "Caracterizacion y Descriptivo", href: "#" },
                { name: "Formatos", href: "#" },
                { name: "Documentos", href: "#" },
            ]
        },
        {
            name: "Liquidacion", 
            icon: BookCopy, 
            subItem: [
                { name: "Ayudas Diagnosticas", href: "#" },
                { name: "Laboratorio Clinico", href: "/dashboard/financiera/liquidacion" },
                { name: "Procedimientos", href: "#" },
                { name: "Consultas", href: "#" },
                { name: "Ambulancias", href: "#" },
                { name: "Contratacion", href: "/dashboard/financiera/contratacion" },
                { name: "Configuracion", href: "#" },
            ]
        },
        {
            name: "Cartera", 
            icon: Briefcase, 
            subItem: [
                { name: "Caracterizacion y Descriptivo", href: "#" },
                { name: "Formatos", href: "#" },
                { name: "Documentos", href: "#" },
            ]
        },
        {
            name: "Contabilidad", 
            icon: Calculator, 
            subItem: [
                { name: "Caracterizacion y Descriptivo", href: "#" },
                { name: "Formatos", href: "#" },
                { name: "Documentos", href: "#" },
            ]
        },
    ]
}

export const informacionNavLinks = {
    name: "Gestion Informacion",
    icon: LetterText,
    items: [
        {
            name: "Archivo Clinico", 
            icon: FolderSearch, 
            subItem: [
                { name: "Caracterizacion y Descriptivo", href: "#" },
                { name: "Formatos", href: "#" },
                { name: "Documentos", href: "#" },
            ]
        },
        {
            name: "Estadistica", 
            icon: ChartLine, 
            subItem: [
                { name: "Caracterizacion y Descriptivo", href: "/dashboard/informacion/estadistica" },
                { name: "Formatos", href: "#" },
                { name: "Documentos", href: "#" },
            ]
        },
        {
            name: "Sistemas", 
            icon: MonitorCog, 
            subItem: [
                { name: "Caracterizacion y Descriptivo", href: "#" },
                { name: "Formatos", href: "#" },
                { name: "Documentos", href: "#" },
            ]
        },
    ]
}

export const juridicaNavLinks = {
    name: "Gestion Juridica",
    icon: Scale,
    items: [
        { name: "Caracterizacion y Descriptivo", href: "#" },
        { name: "Documentos", href: "#" },
        { name: "Formatos", href: "#" },
    ]
}

export const mantenimientoNavLinks = {
    name: "Mantenimiento Hospitalario",
    icon: Construction,
    items: [
        { name: "Caracterizacion y Descriptivo", href: "#" },
        { name: "Documentos", href: "#" },
        { name: "Formatos", href: "#" },
    ]
}

export const talentoNavLinks = {
    name: "Talento Humano",
    icon: CalendarCheck,
    items: [
        {
            name: "Seguridad y Salud en el Trabajo", 
            icon: NotebookPen, 
            subItem: [
                { name: "Caracterizacion y Descriptivo", href: "#" },
                { name: "Formatos", href: "#" },
                { name: "Documentos", href: "#" },
            ]
        },
        {
            name: "Talento Humano", 
            icon: CalendarCheck, 
            subItem: [
                { name: "Caracterizacion y Descriptivo", href: "#" },
                { name: "Formatos", href: "#" },
                { name: "Documentos", href: "#" },
            ]
        },
    ]
}