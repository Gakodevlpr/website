import Titles from "../../../components/General/Titles";
import CourseSection from "../../../components/Courses/CourseSection";
import { useOutlet } from "react-router-dom";

export default function Programacion101() {
    const bgColorNew = "bg-yellow-500"
    const titleColorNew = "text-black"
    const outlet = useOutlet();
    
    return (
        <section className="flex flex-col items-center">
            {/* Si NO hay contenido hijo → muestra el contenido principal */}
            {!outlet && (
                <>
                    <Titles title="Básicos de programación" text="¡Bienvenido/a! Aquí aprenderás los conceptos fundamentales que necesitas para empezar a programar, sin importar el lenguaje que elijas en el futuro. Estos son los pilares que te ayudarán a entender cualquier tecnología."/>
                    <div className="flex flex-col gap-8 md:w-8/10 max-w-5xl pt-10">
                        <CourseSection bgColor={bgColorNew} titleColor={titleColorNew} title="1. ¿Qué es la programación?">
                            <p>
                                La programación es el proceso de escribir instrucciones (código) que una computadora puede entender y ejecutar. Es como darle órdenes a una máquina para que realice tareas específicas.
                            </p>
                        </CourseSection>
                        
                        <CourseSection bgColor={bgColorNew} titleColor={titleColorNew} title="2. Variables y Tipos de Datos">
                            <p>
                                <strong>Variables</strong> son espacios donde guardamos información. Por ejemplo, tu nombre, tu edad o el resultado de una suma. Los <strong>tipos de datos</strong> más comunes son:
                            </p>
                            <ul className="list-disc list-inside ml-4 mt-2">
                                <li>
                                    <b>Números</b> (enteros, decimales)
                                </li>
                                <li>
                                    <b>Cadenas de texto</b> (palabras, frases)
                                </li>
                                <li>
                                    <b>Booleanos</b> (verdadero o falso)
                                </li>
                            </ul>
                        </CourseSection>
                        
                        <CourseSection bgColor={bgColorNew} titleColor={titleColorNew} title="3. Operadores">
                            <p>
                                Los operadores permiten realizar operaciones con variables y valores. Ejemplos:
                            </p>
                            <ul className="grid grid-cols-2 list-disc list-inside ml-4 mt-2">
                                <li>
                                    <b>+</b> Suma
                                </li>
                                <li>
                                    <b>-</b> Resta
                                </li>
                                <li>
                                    <b>*</b> Multiplicación
                                </li>
                                <li>
                                    <b>/</b> División
                                </li>
                                <li>
                                    <b>==</b> Igualdad
                                </li>
                                <li>
                                    <b>&gt;</b> Mayor que
                                </li>
                                <li>
                                    <b>&lt;</b> Menor que
                                </li>
                            </ul>
                        </CourseSection>
                        
                        <CourseSection bgColor={bgColorNew} titleColor={titleColorNew} title="4. Estructuras de Control">
                            <p>
                                Permiten tomar decisiones o repetir acciones:
                            </p>
                            <ul className="list-disc list-inside ml-4 mt-2">
                                <li>
                                    <b>Condicionales</b> (<code>if</code>, <code>else</code>): ejecutan código solo si se cumple una condición.
                                </li>
                                <li>
                                    <b>Bucles</b> (<code>for</code>, <code>while</code>): repiten una acción varias veces.
                                </li>
                            </ul>
                        </CourseSection>
                        
                        <CourseSection bgColor={bgColorNew} titleColor={titleColorNew} title="5. Funciones">
                            <p>
                                Una función es un bloque de código que realiza una tarea específica. Sirven para reutilizar código y organizar mejor los programas.
                            </p>
                        </CourseSection>
                        
                        <CourseSection bgColor={bgColorNew} titleColor={titleColorNew} title="6. Comentarios">
                            <p>
                                Los comentarios son notas en el código que ayudan a explicar qué hace cada parte. No afectan la ejecución del programa.
                            </p>
                        </CourseSection>
                    </div>
                    <div className="mt-10 text-center">
                        <p className="text-lg font-semibold">
                            ¿Listo/a para empezar a programar? 🚀
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