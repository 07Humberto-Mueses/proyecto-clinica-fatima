import { UserRoundCog, Construction, GitPullRequestDraft, ShieldEllipsis, SquareEqual, FolderKanban, Container, NotebookPen, CalendarCheck, Forklift, GraduationCap, Scale, ShieldCheck, MonitorCog, ChartBarDecreasing, FolderSearch, CreditCard, Calculator, BanknoteArrowDown, UserRoundCheck, Briefcase } from "lucide-react";

export const navLinks = [
    {
        title: "APOYO",
        icon: Forklift,
        items: [
            {
                subTitle: "Apoyo Logistico",
                icon: UserRoundCog,
                subItem: [
                    {
                        name: "Apoyo Logistico",
                        icon: UserRoundCog, menu: [
                            { name: "Formatos", href: "#" },
                        ]
                    },
                    {
                        name: "Compras y Logistica",
                        icon: BanknoteArrowDown, menu: [
                            { name: "Caracterizacion y Descriptivo", href: "#" },
                            { name: "Formatos", href: "#" },
                            { name: "Documentos", href: "#" },
                        ]
                    },
                    {
                        name: "Gestion Ambiental",
                        icon: Container, menu: [
                            { name: "Caracterizacion y Descriptivo", href: "#" },
                            { name: "Formatos", href: "#" },
                            { name: "Documentos", href: "#" },
                        ]
                    },
                ]
            },
            {
                subTitle: "Docencia Servicio",
                icon: GraduationCap,
                subItem: [
                    { name: "Caracterizacion y Descriptivo", href: "#" },
                    { name: "Formatos", href: "#" },
                    { name: "Documentos", href: "#" },
                ]
            },
            {
                subTitle: "Gestion Calidad",
                icon: ShieldCheck,
                subItem: [
                    { name: "Caracterizacion y Descriptivo", href: "#" },
                    { name: "Formatos", href: "#" },
                    { name: "Documentos", href: "#" },
                ]
            },
            {
                subTitle: "Gestion Financiera",
                icon: CreditCard,
                subItem: [
                    {
                        name: "Admisiones y Facturacion",
                        icon: UserRoundCheck, menu: [
                            { name: "Caracterizacion y Descriptivo", href: "#" },
                            { name: "Formatos", href: "#" },
                            { name: "Documentos", href: "#" },
                        ]
                    },
                    {
                        name: "Cartera",
                        icon: Briefcase, menu: [
                            { name: "Caracterizacion y Descriptivo", href: "#" },
                            { name: "Formatos", href: "#" },
                            { name: "Documentos", href: "#" },
                        ]
                    },
                    {
                        name: "Contabilidad",
                        icon: Calculator, menu: [
                            { name: "Caracterizacion y Descriptivo", href: "#" },
                            { name: "Formatos", href: "#" },
                            { name: "Documentos", href: "#" },
                        ]
                    },
                ]
            },
            {
                subTitle: "Gestion Informacion",
                icon: Text,
                subItem: [
                    {
                        name: "Archivo Clinico",
                        icon: FolderSearch, menu: [
                            { name: "Caracterizacion y Descriptivo", href: "#" },
                            { name: "Formatos", href: "#" },
                            { name: "Documentos", href: "#" },
                        ]
                    },
                    {
                        name: "Estadistica",
                        icon: ChartBarDecreasing, menu: [
                            { name: "Caracterizacion y Descriptivo", href: "#" },
                            { name: "Formatos", href: "#" },
                            { name: "Documentos", href: "#" },
                        ]
                    },
                    {
                        name: "Sistemas",
                        icon: MonitorCog, menu: [
                            { name: "Caracterizacion y Descriptivo", href: "#" },
                            { name: "Formatos", href: "#" },
                            { name: "Documentos", href: "#" },
                        ]
                    },
                ]
            },
            {
                subTitle: "Gestion Juridica",
                icon: Scale,
                subItem: [
                    { name: "Caracterizacion y Descriptivo", href: "#" },
                    { name: "Formatos", href: "#" },
                    { name: "Documentos", href: "#" },
                ]
            },
            {
                subTitle: "Mantenimiento Hospitalario",
                icon: Construction,
                subItem: [
                    { name: "Caracterizacion y Descriptivo", href: "#" },
                    { name: "Formatos", href: "#" },
                    { name: "Documentos", href: "#" },
                ]
            },
            {
                subTitle: "Talento Humano",
                icon: CalendarCheck,
                subItem: [
                    {
                        name: "Seguridad y Salud en el Trabajo",
                        icon: NotebookPen, menu: [
                            { name: "Caracterizacion y Descriptivo", href: "#" },
                            { name: "Formatos", href: "#" },
                            { name: "Documentos", href: "#" },
                        ]
                    },
                    {
                        name: "Talento Humano",
                        icon: CalendarCheck, menu: [
                            { name: "Caracterizacion y Descriptivo", href: "#" },
                            { name: "Formatos", href: "#" },
                            { name: "Documentos", href: "#" },
                        ]
                    },
                ]
            },
        ]
    },
    {
        title: "CONTROL",
        icon: GitPullRequestDraft,
        items: [
            {
                subTitle: "Auditoria Contable",
                icon: ShieldEllipsis,
                subItem: [
                    { name: "Caracterizacion y Descriptivo", href: "#" },
                    { name: "Formatos", href: "#" },
                    { name: "Documentos", href: "#" },
                ]
            },
            {
                subTitle: "Auditoria Medica",
                icon: UserRoundCog,
                subItem: [
                    {
                        name: "Auditoria de Cuentas Medicas",
                        icon: FolderKanban, menu: [
                            { name: "Caracterizacion y Descriptivo", href: "#" },
                            { name: "Formatos", href: "#" },
                        ]
                    },
                    {
                        name: "Auditoria Medica de Calidad",
                        icon: SquareEqual, menu: [
                            { name: "Caracterizacion y Descriptivo", href: "#" },
                            { name: "Formatos", href: "#" },
                            { name: "Documentos", href: "#" },
                        ]
                    },
                ]
            },
        ],
    },
    {},
    {},
    {}
]