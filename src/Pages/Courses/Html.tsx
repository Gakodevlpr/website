import Titles from "../../components/General/Titles";
import CourseSection from "../../components/General/CourseSection";

export default function Html() {
    return (
        <section className="flex flex-col w-full items-center mx-auto px-4">
            <Titles title="Html" text="En este apartado encontrarás información sobre el lenguaje de programación Html. Desde información general hasta temas avanzados, los cuales podrás encontrar haciendo click en el menú <b>'Unidades del curso'</b>." />
            <article>
                <div className="rounded-lg flex flex-col gap-6 w-full max-w-4xl items-center mt-6">
                    <h2 className="text-center font-bold text-2xl font-Montserrat">
                        ¿Qué es HTML?
                    </h2>
                    <p className="text-justify">
                        <b>HTML</b> (<em>HyperText Markup Language</em>) es el lenguaje de marcado principal para la creación de páginas web. Permite estructurar el contenido de la web mediante el uso de <b>etiquetas</b>, definiendo títulos, párrafos, listas, enlaces, imágenes y mucho más.
                    </p>
                    <div id="historia" className="flex flex-col gap-4 w-full">
                        <CourseSection title="Historia:" bgColor="bg-orange-600">
                            <p className="text-justify">
                                HTML fue creado a finales de los años 80 e inicios de los 90 por <b>Tim Berners-Lee</b>, un científico británico que trabajaba en el CERN. Su objetivo era facilitar el intercambio de documentos científicos entre investigadores a través de una red global, lo que hoy conocemos como la <b>World Wide Web</b>.
                                <br /><br />
                                Desde su primera versión, HTML ha evolucionado considerablemente. Actualmente, la versión más utilizada es <b>HTML5</b>, que incorpora nuevas etiquetas y funcionalidades para soportar multimedia, gráficos, aplicaciones interactivas y una mejor semántica.
                            </p>
                        </CourseSection>
                    </div>
                    <div id="usos" className="flex flex-col gap-4 w-full">
                        <CourseSection title="Usos:" bgColor="bg-orange-600">
                            <div className="text-justify">
                                HTML es fundamental para:
                                <ul className="list-disc pl-8 pt-2 space-y-2">
                                    <li>Estructurar el contenido de páginas web</li>
                                    <li>Crear enlaces entre documentos (hipervínculos)</li>
                                    <li>Insertar imágenes, videos y otros recursos multimedia</li>
                                    <li>Formularios para la interacción con usuarios</li>
                                    <li>Definir tablas y listas de datos</li>
                                    <li>Proveer la base para el diseño y la funcionalidad junto con CSS y JavaScript</li>
                                </ul>
                            </div>
                        </CourseSection>
                    </div>
                    <div id="ejemplo" className="flex flex-col gap-4 w-full">
                        <CourseSection title="Ejemplo básico:" bgColor="bg-orange-600">
                            <p className="text-justify">
                                Un documento HTML básico se ve así:
                            </p>
                            <pre className="bg-gray-900 text-green-200 rounded-md p-4 overflow-x-auto text-sm">
{`<!DOCTYPE html>
<html>
  <head>
    <title>Mi primera página HTML</title>
  </head>
  <body>
    <h1>¡Hola, mundo!</h1>
    <p>Esta es mi primera página web usando HTML.</p>
  </body>
</html>`}
                            </pre>
                        </CourseSection>
                    </div>
                    <div id="tip" className="flex flex-col gap-4 w-full">
                        <CourseSection title="¿Sabías qué?" bgColor="bg-orange-600">
                            <p className="text-justify">
                                HTML <b>no es un lenguaje de programación</b>, sino un lenguaje de marcado. No permite realizar cálculos ni lógica, pero es esencial para la estructura de cualquier sitio web.
                            </p>
                        </CourseSection>
                    </div>
                </div>
            </article>
        </section>
    )
}