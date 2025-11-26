import CourseSection from "../../../components/Courses/CourseSection";
import Titles from "../../../components/General/Titles";

export default function Programacion101_2() {
    const bgColorNew = "bg-yellow-500"
    const titleColorNew = "text-black"
    return (
        <section className="flex flex-col items-center">
            <Titles title="Básicos de programación <br/> Sección 2" text="Empecemos a picar código 🚀" />
            <div className="flex flex-col gap-8 md:w-8/10 max-w-5xl pt-10">
            <CourseSection
                title="Ejemplo de algoritmo en pseudocódigo"
                bgColor={bgColorNew}
                titleColor={titleColorNew}>
                    <div>
                        <p>
                            En este ejemplo, se muestra un algoritmo en pseudocódigo que solicita al usuario su nombre y luego lo saluda.
                        </p>
                        <pre className="bg-gray-600 p-4 rounded-md font-mono whitespace-pre">
                            {`ALGORITMO saludar
    ESCRIBIR "¿Cuál es tu nombre?"
    LEER nombre
    ESCRIBIR "Hola, " + nombre + "!"
FIN ALGORITMO`}
                        </pre>
                        <p>
                            En este algoritmo, se utiliza la instrucción <code className="text-yellow-400">ESCRIBIR</code> para mostrar mensajes en la consola. La instrucción <code className="text-yellow-400">LEER</code> se utiliza para obtener la entrada del usuario y almacenarla en la variable <code className="text-yellow-400">nombre</code>. Finalmente, se utiliza la instrucción <code className="text-yellow-400">ESCRIBIR</code> para mostrar un mensaje de saludo personalizado.
                        </p>
                        <br/>
                        <p>De esta forma podemos ver algo que empieza a parecerse a un lenguaje de programación. Donde ya comenzamos a utilizar
                            algunas variables e instrucciones. Siendo estas últimas las funciones que algunos lenguajes de programación ya nos dan
                            para poder ejecutar nuestros algoritmos. 
                        </p>
                    </div>
            </CourseSection>
            </div> 
        </section>
    )
}