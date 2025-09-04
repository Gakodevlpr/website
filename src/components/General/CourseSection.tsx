import type { ReactNode } from 'react';

interface CourseSectionProps {
    title: string;
    children: ReactNode;
    bgColor?: string; // Color de fondo opcional
    titleColor?: string
}

export default function CourseSection({ title, children, bgColor = "bg-green-700", titleColor}: CourseSectionProps) {
    return (
        <section className="flex flex-col gap-4">
            <h2
                className={`font-bold text-xl ${bgColor} p-2 rounded-md text-center font-Montserrat ${titleColor}`}
                style={{ fontFamily: "var(--font-Montserrat)" }}
            >
                {title}
            </h2>
            <div className="flex flex-col gap-2">
                {children}
            </div>
        </section>
    );
}
