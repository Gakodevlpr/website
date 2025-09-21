import Titles from "../../../components/General/Titles"
import CourseSection from "../../../components/Courses/CourseSection"

export default function Programacion101_1() {
    const bgColorNew = "bg-yellow-500"
    const titleColorNew = "text-black"
    return (
        <section className="flex flex-col items-center">
            <Titles title="Básicos de programación <br/> Sección 1" text="En esta sección, aprenderás los conceptos básicos de programación, como las variables, tipos de datos y operadores." />
            <div className="flex flex-col gap-8 md:w-8/10 max-w-5xl pt-10">
            <CourseSection bgColor={bgColorNew} titleColor={titleColorNew} title="Variables y Tipos de Datos">
                <p>
                    <strong>Variables</strong> son espacios donde guardamos información. Por ejemplo, tu nombre, tu edad o el resultado de una suma. Los <strong>tipos de datos</strong> más comunes son:
                </p>
                <ul className="list-disc list-inside ml-4 mt-2">
                    <li>
                        <b className="text-red-600">Números</b> (enteros, decimales)
                    </li>
                    <li>
                        <b className="text-red-600">Cadenas de texto</b> (palabras, frases)
                    </li>
                    <li>
                        <b className="text-red-600">Booleanos</b> (verdadero o falso)
                    </li>
                    <li>
                        <b className="text-red-600">Arrays/Listas</b> (como una lista de la compra, donde guardas varios elementos con orden o sin él)
                    </li>
                    <li>
                        <b className="text-red-600">Objetos</b> (como una ficha de persona que contiene nombre, edad, etc.)
                    </li>
                </ul>
            </CourseSection>

            <CourseSection bgColor={bgColorNew} titleColor={titleColorNew} title="Operadores">
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

            <CourseSection bgColor={bgColorNew} titleColor={titleColorNew} title="Estructuras de Control">
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

            <CourseSection bgColor={bgColorNew} titleColor={titleColorNew} title="Funciones">
                <p>
                    Una función es un bloque de código que realiza una tarea específica. Sirven para reutilizar código y organizar mejor los programas.
                </p>
            </CourseSection>

            <CourseSection bgColor={bgColorNew} titleColor={titleColorNew} title="Comentarios">
                <p>
                    Los comentarios son notas en el código que ayudan a explicar qué hace cada parte. No afectan la ejecución del programa.
                </p>
            </CourseSection>
            </div>
        </section>
    )
}