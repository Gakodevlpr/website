import Titles from "../../../components/General/Titles";
import CourseSection from "../../../components/Courses/CourseSection";
import { useOutlet } from "react-router-dom";

export default function Html_0() {
    const outlet = useOutlet();
    
    return (
        <section className="flex flex-col items-center">
            {/* Si NO hay contenido hijo → muestra el contenido principal */}
            {!outlet && (
                <>
                    <Titles 
                        title="HTML" 
                        text="¡Bienvenido/a! Aquí aprenderás los conceptos fundamentales del lenguaje de marcado HTML. Desde lo básico hasta conceptos avanzados para crear páginas web."
                    />
                    <div className="flex flex-col gap-8 md:w-8/10 max-w-5xl pt-10">
                        <CourseSection title="¿Qué es HTML?" bgColor="bg-orange-600">
                            <p>
                                <b>HTML</b> (<em>HyperText Markup Language</em>) es el lenguaje de marcado principal para la creación de páginas web. Permite estructurar el contenido de la web mediante el uso de <b>etiquetas</b>, definiendo títulos, párrafos, listas, enlaces, imágenes y mucho más.
                            </p>
                        </CourseSection>
                        
                        <CourseSection title="Historia" bgColor="bg-orange-600">
                            <p>
                                HTML fue creado a finales de los años 80 e inicios de los 90 por <b>Tim Berners-Lee</b>, un científico británico que trabajaba en el CERN. Su objetivo era facilitar el intercambio de documentos científicos entre investigadores a través de una red global, lo que hoy conocemos como la <b>World Wide Web</b>.
                                <br /><br />
                                Desde su primera versión, HTML ha evolucionado considerablemente. Actualmente, la versión más utilizada es <b>HTML5</b>, que incorpora nuevas etiquetas y funcionalidades para soportar multimedia, gráficos, aplicaciones interactivas y una mejor semántica.
                            </p>
                        </CourseSection>
                        
                        <CourseSection title="Usos principales" bgColor="bg-orange-600">
                            <ul className="list-disc list-inside ml-4 mt-2">
                                <li>Estructurar el contenido de páginas web</li>
                                <li>Crear enlaces entre documentos (hipervínculos)</li>
                                <li>Insertar imágenes, videos y otros recursos multimedia</li>
                                <li>Formularios para la interacción con usuarios</li>
                                <li>Definir tablas y listas de datos</li>
                                <li>Proveer la base para el diseño y la funcionalidad junto con CSS y JavaScript</li>
                            </ul>
                        </CourseSection>
                        
                        <CourseSection title="Ejemplo básico" bgColor="bg-orange-600">
                            <p>
                                Un documento HTML básico se ve así:
                            </p>
                            <pre className="bg-gray-900 text-green-200 rounded-md p-4 overflow-x-auto text-sm mt-2">
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
                    <div className="mt-10 text-center">
                        <p className="text-lg font-semibold">
                            ¿Listo/a para empezar con HTML? 🌐
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
