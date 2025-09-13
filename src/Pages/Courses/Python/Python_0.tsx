import Titles from "../../../components/General/Titles";
import CourseSection from "../../../components/Courses/CourseSection";
import { useOutlet } from "react-router-dom";

export default function Python() {
    const outlet = useOutlet();
    
    return (
        <section className="flex flex-col items-center">
            {/* Si NO hay contenido hijo → muestra el contenido principal */}
            {!outlet && (
                <>
                    <Titles 
                        title="Python" 
                        text="¡Bienvenido/a! Aquí aprenderás los conceptos fundamentales del lenguaje de programación Python. Desde lo básico hasta conceptos avanzados."
                    />
                    <div className="flex flex-col gap-8 md:w-8/10 max-w-5xl pt-10">
                        <CourseSection title="¿Qué es Python?">
                            <p>
                                Python es un lenguaje de programación interpretado de alto nivel que se utiliza para desarrollar aplicaciones de todo tipo. Su sintaxis clara y su enfoque en la legibilidad del código lo hacen ideal para principiantes y expertos en programación.
                            </p>
                        </CourseSection>
                        
                        <CourseSection title="Historia">
                            <p>
                                Creado por Guido van Rossum en 1989, Python es uno de los lenguajes más populares y versátiles del mundo. Aunque es considerado muchas veces como un lenguaje "scripting", en realidad es un lenguaje de propósito general.
                            </p>
                        </CourseSection>
                        
                        <CourseSection title="Usos principales">
                            <ul className="list-disc list-inside ml-4 mt-2">
                                <li>Desarrollo web</li>
                                <li>Inteligencia Artificial</li>
                                <li>Ciencia de datos</li>
                                <li>Automatización de tareas</li>
                                <li>Aplicaciones móviles</li>
                            </ul>
                        </CourseSection>
                    </div>
                    <div className="mt-10 text-center">
                        <p className="text-lg font-semibold">
                            ¿Listo/a para empezar con Python? 🐍
                        </p>
                        <p className="text-gray-400 mt-2">
                            Explora los ejemplos y ejercicios prácticos en la siguiente sección.
                        </p>
                    </div>
                </>
            )}
            
            {/* Renderiza el contenido hijo */}
            {outlet}
        </section>
    );
}
