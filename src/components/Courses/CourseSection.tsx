import type { ReactNode } from 'react';

interface CourseSectionProps {
    title: string; // Título de sección obligatorio
    children: ReactNode; //Texto de sección obligatorio
    bgColor?: string; // Color de fondo opcional
    titleColor?: string // Color de título opcional
    id?: string; // ID opcional para el enlace
}

export default function CourseSection({ title, children, bgColor = "bg-green-700", titleColor, id }: CourseSectionProps) {
    return (
        <section className="flex flex-col gap-4" id={title || id}>
            <h2
                className={`font-bold text-xl ${bgColor} p-2 rounded-md text-center font-Montserrat ${titleColor}`}
                style={{ fontFamily: "var(--font-Montserrat)" }}
            >
                {title}
            </h2>
            <div className="flex flex-col gap-2 md:text-lg">
                {children}
            </div>
        </section>
    );
}
