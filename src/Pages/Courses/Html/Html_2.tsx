import Titles from "../../../components/General/Titles";
import CourseSection from "../../../components/Courses/CourseSection";

export default function Html_1() {
    return (
        <div className="flex flex-col gap-5 md:w-8/10 max-w-5xl">
            <Titles 
                title="HTML - Sección 2" 
                text="En esta sección aprenderás las etiquetas básicas de HTML y cómo estructurar tu primera página web."
            />
                <CourseSection title="Estructura básica de HTML" bgColor="bg-orange-600">
                    <p>
                        Todo documento HTML tiene una estructura básica que incluye elementos esenciales:
                    </p>
                    <ul className="list-disc list-inside ml-4 mt-2">
                        <li><code>&lt;!DOCTYPE html&gt;</code> - Declara que es un documento HTML5</li>
                        <li><code>&lt;html&gt;</code> - Elemento raíz que contiene todo el contenido</li>
                        <li><code>&lt;head&gt;</code> - Contiene metadatos sobre el documento</li>
                        <li><code>&lt;body&gt;</code> - Contiene el contenido visible de la página</li>
                    </ul>
                </CourseSection>
                
                <CourseSection title="Etiquetas de encabezado" bgColor="bg-orange-600">
                    <p>
                        Los encabezados se usan para estructurar el contenido y crear jerarquías:
                    </p>
                    <pre className="bg-gray-900 text-green-200 rounded-md p-4 text-sm mt-2">
{`<h1>Título principal (más importante)</h1>
<h2>Subtítulo</h2>
<h3>Sub-subtítulo</h3>
<h4>Encabezado nivel 4</h4>
<h5>Encabezado nivel 5</h5>
<h6>Encabezado nivel 6 (menos importante)</h6>`}
                    </pre>
                    <p className="mt-2 text-sm text-gray-600">
                        <strong>Importante:</strong> Solo debe haber un <code>&lt;h[1-6]&gt;</code> por página para mantener la estructura semántica.

                    </p>
                </CourseSection>
                
                <CourseSection title="Párrafos y texto" bgColor="bg-orange-600">
                    <p>
                        Para crear párrafos y dar formato al texto:
                    </p>
                    <pre className="bg-gray-900 text-green-200 rounded-md p-4 overflow-x-auto text-sm mt-2">
{`<p>Este es un párrafo normal.</p>
<p>Este es otro párrafo.</p>

<strong>Texto en negrita</strong>
<em>Texto en cursiva</em>
<u>Texto subrayado</u>

<br> <!-- Salto de línea -->
<hr> <!-- Línea horizontal -->`}
                    </pre>
                </CourseSection>
                
                <CourseSection title="Listas" bgColor="bg-orange-600">
                    <p>
                        HTML permite crear diferentes tipos de listas:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                        <div>
                            <h4 className="font-semibold mb-2">Lista desordenada:</h4>
                            <pre className="bg-gray-900 text-green-200 rounded-md p-3 overflow-x-auto text-sm">
{`<ul>
  <li>Elemento 1</li>
  <li>Elemento 2</li>
  <li>Elemento 3</li>
</ul>`}
                            </pre>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Lista ordenada:</h4>
                            <pre className="bg-gray-900 text-green-200 rounded-md p-3 overflow-x-auto text-sm">
{`<ol>
  <li>Primer elemento</li>
  <li>Segundo elemento</li>
  <li>Tercer elemento</li>
</ol>`}
                            </pre>
                        </div>
                    </div>
                </CourseSection>
                
                <CourseSection title="Enlaces" bgColor="bg-orange-600">
                    <p>
                        Los enlaces permiten navegar entre páginas y recursos:
                    </p>
                    <pre className="bg-gray-900 text-green-200 rounded-md p-4 overflow-x-auto text-sm mt-2">
{`<!-- Enlace a otra página web -->
<a href="https://www.google.com">Ir a Google</a>

<!-- Enlace a otra página de tu sitio -->
<a href="contacto.html">Página de contacto</a>

<!-- Enlace que se abre en nueva pestaña -->
<a href="https://www.ejemplo.com" target="_blank">Abrir en nueva pestaña</a>

<!-- Enlace a una sección de la misma página -->
<a href="#seccion1">Ir a la sección 1</a>`}
                    </pre>
                </CourseSection>
        </div>
    );
}
