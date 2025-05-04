import { SquarePlus, Bed, Refrigerator, CirclePlus, Pill, Users, TestTubes, Cherry, Syringe, Radiation, CircuitBoard, SquareEqual, BedDouble, BedSingle, Activity, Stethoscope, ShieldPlus, Calendar, Baby } from "lucide-react";

export const diagnosticasNavLinks = {
    name: "Ayudas Diagnosticas",
    icon: CircuitBoard,
    items: [
        {
            name: "Imagenologia",
            icon: Radiation, 
            subItem: [
                { name: "Caracterizacion y Descriptivo", href: "#" },
                { name: "Documentos", href: "#" },
                { name: "Formatos", href: "#" },
            ]
        },
        {
            name: "Laboratorio Clinico", 
            icon: TestTubes, 
            subItem: [
                { name: "Caracterizacion y Descriptivo", href: "#" },
                { name: "Formatos", href: "#" },
                { name: "Documentos", href: "#" },
            ]
        },
    ]
}

export const terapeuticasNavLinks = {
    name: "Ayudas Terapéuticas",
    icon: CircuitBoard,
    items: [
        {
            name: "Servicio Transfusional", 
            icon: Syringe, 
            subItem: [
                { name: "Caracterizacion y Descriptivo", href: "#" },
                { name: "Documentos", href: "#" },
                { name: "Formatos", href: "#" },
            ]
        },
        {
            name: "Nutricion", 
            icon: Cherry, 
            subItem: [
                { name: "Caracterizacion y Descriptivo", href: "#" },
                { name: "Formatos", href: "#" },
                { name: "Documentos", href: "#" },
            ]
        },
        {
            name: "Servicio Farmaceutico", 
            icon: Pill, 
            subItem: [
                { name: "Caracterizacion y Descriptivo", href: "#" },
                { name: "Formatos", href: "#" },
                { name: "Documentos", href: "#" },
            ]
        },
    ]
}

export const usuarioNavLinks = {
    name: "Atención al Usuario",
    icon: Users,
    items: [
        { name: "Caracterizacion y Descriptivo", href: "#" },
        { name: "Documentos", href: "#" },
        { name: "Formatos", href: "#" },
    ]
}

export const consultaNavLinks = {
    name: "Consulta Externa",
    icon: SquarePlus,
    items: [
        {
            name: "Consulta Externa", 
            icon: CirclePlus, 
            subItem: [
                { name: "Caracterizacion y Descriptivo", href: "#" },
                { name: "Documentos", href: "#" },
                { name: "Formatos", href: "#" },
            ]
        },
        {
            name: "Vacunacion", 
            icon: Refrigerator, 
            subItem: [
                { name: "Formatos", href: "#" },
            ]
        },
    ]
}

export const internacionNavLinks = {
    name: "Internacion",
    icon: Bed,
    items: [
        {
            name: "Hospitalizacion", 
            icon: BedDouble, 
            subItem: [
                { name: "Caracterizacion y Descriptivo", href: "#" },
                { name: "Documentos", href: "#" },
                { name: "Formatos", href: "#" },
            ]
        },
        {
            name: "Internacion", 
            icon: BedSingle, 
            subItem: [
                { name: "Formatos", href: "#" },
                { name: "Documentos", href: "#" },
            ]
        },
        {
            name: "UCI Adultos", 
            icon: Activity, 
            subItem: [
                { name: "Caracterizacion y Descriptivo", href: "#" },
                { name: "Formatos", href: "#" },
                { name: "Documentos", href: "#" },
            ]
        },
        {
            name: "UCI Neonatos", 
            icon: Baby,
            subItem: [
                { name: "Caracterizacion y Descriptivo", href: "#" },
                { name: "Formatos", href: "#" },
                { name: "Documentos", href: "#" },
            ]
        },
    ]
}

export const quirofanoNavLinks = {
    name: "Quirofano",
    icon: Stethoscope,
    items: [
        {
            name: "Atencion Quirurgica", 
            icon: SquareEqual, 
            subItem: [
                { name: "Caracterizacion y Descriptivo", href: "#" },
                { name: "Documentos", href: "#" },
                { name: "Formatos", href: "#" },
            ]
        },
        {
            name: "Esterilizacion", 
            icon: ShieldPlus, 
            subItem: [
                { name: "Caracterizacion y Descriptivo", href: "#" },
                { name: "Documentos", href: "#" },
                { name: "Formatos", href: "#" },
            ]
        },
        {
            name: "Sala de Partos", 
            icon: Calendar, 
            subItem: [
                { name: "Caracterizacion y Descriptivo", href: "#" },
                { name: "Formatos", href: "#" },
                { name: "Documentos", href: "#" },
            ]
        },
    ]
}

export const urgenciasNavLinks = {
    name: "Urgencias",
    icon: Stethoscope,
    items: [
        { name: "Caracterizacion y Descriptivo", href: "#" },
        { name: "Documentos", href: "#" },
        { name: "Formatos", href: "#" },
        { name: "Guias de Atencion", href: "#" },
    ]
}