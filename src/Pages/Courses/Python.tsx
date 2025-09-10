import Titles from "../../components/General/Titles"
import CourseSection from "../../components/General/CourseSection";
// import EduPlayGround from "../../components/Courses/EduPlayGround";
// import SimplePlaygroundExample from "../../components/Courses/SimplePlaygroundExample";

export default function Python() {
    return (
        <section className="flex flex-col items-center justify-center w-full">
            <Titles
                title="Python"
                text='En este apartado encontrarás información sobre el lenguaje de programación Python. Desde información general hasta temas avanzados, los cuales podrás encontrar haciendo click en el menú <b>"Unidades del curso"</b>.'
                className=""
            />
            <div className="w-full max-w-7xl flex flex-col items-center">
                <div
                    id="TextoPrincipal"
                    className="flex flex-col md:flex-col justify-center items-center gap-4 w-full"
                >
                    <div className="rounded-lg flex flex-col gap-4 md:w-8/10 w-full items-center">
                        <CourseSection title="¿Qué es Python?">
                            <p className="text-justify">Python es un lenguaje de programación interpretado de alto nivel que se utiliza para desarrollar aplicaciones de todo tipo. Su sintaxis clara y su enfoque en la legibilidad del código lo hacen ideal para principiantes y expertos en programación.</p>
                        </CourseSection>

                        <div id="historia" className="flex flex-col gap-4 w-full">
                            <CourseSection title="Historia:">
                                <p className="text-justify">
                                    Este lenguaje es uno de los más populares y versátiles del mundo. Creado por Guido van Rossum en 1989.
                                    <br /><br />
                                    Aunque es considerado muchas veces como un lenguaje "scripting", en realidad es un lenguaje de propósito general. Actualmente
                                    es usado en muchas áreas como: <em className="font-bold">Desarrollo web, Inteligencia Artificial, Ciencia de datos, etc.</em>
                                    &nbsp;Incluso en grandes servidores web que proveen servicio ininterrumpido los 365 días del año.
                                    <br /><br />
                                    Guido van Rossum es un programador holandés que trabajaba en el CWI (Centrum Wiskunde & Informatica) cuando comenzó a desarrollar Python.
                                    A finales de la década de los 80 (1989), Guido Van Rossum decidió crear un nuevo lenguaje de programación por necesidad personal,
                                    buscando así tener un lenguaje que fuera fácil de leer, escribir y soportar. Quería hacerlo de forma que los programas fueran
                                    fáciles de leer y escribir, o mejor dicho, con una sintáxis simple y limpia.
                                    <br /><br />
                                    Recibió influencia de muchos otros lenguajes, como ABC, Modula-3 y C++ entre otros.
                                </p>
                            </CourseSection>
                        </div>

                        <div id="usos" className="flex flex-col gap-4 w-full">
                            <CourseSection title="Usos:">
                                <div className="text-justify">
                                    Algunos de los usos más comunes de Python incluyen:
                                    <ul className="list-disc pl-8 pt-2 space-y-2">
                                        <li>Desarrollo web</li>
                                        <li>Inteligencia Artificial</li>
                                        <li>Ciencia de datos</li>
                                        <li>Automatización de tareas</li>
                                        <li>Aplicaciones móviles</li>
                                        <li>Aplicaciones de escritorio</li>
                                        <li>Aplicaciones de servidor</li>
                                        <li>Aplicaciones de red</li>
                                        <li>Y muchas más...</li>
                                    </ul>
                                </div>
                            </CourseSection>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}