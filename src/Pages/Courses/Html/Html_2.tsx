import Titles from "../../../components/General/Titles";
import CourseSection from "../../../components/Courses/CourseSection";

export default function Html_2() {

    return (
        <div className="flex flex-col gap-8 md:w-8/10 max-w-5xl">
            <Titles 
                title="HTML - Sección 2" 
                text="En esta sección avanzada aprenderás sobre imágenes, formularios, tablas y elementos multimedia."
            />
                <CourseSection title="Imágenes" bgColor="bg-orange-600">
                    <p>
                        Las imágenes se insertan usando la etiqueta <code>&lt;img&gt;</code>:
                    </p>
                    <pre className="bg-gray-900 text-green-200 rounded-md p-4 overflow-x-auto text-sm mt-2">
{`<!-- Imagen básica -->
<img src="imagen.jpg" alt="Descripción de la imagen">

<!-- Imagen con dimensiones específicas -->
<img src="logo.png" alt="Logo de la empresa" width="200" height="100">

<!-- Imagen responsiva -->
<img src="foto.jpg" alt="Mi foto" style="max-width: 100%; height: auto;">`}
                    </pre>
                    <p className="mt-2 text-sm text-gray-600">
                        <strong>Importante:</strong> El atributo <code>alt</code> es obligatorio para accesibilidad.
                    </p>
                </CourseSection>
                
                <CourseSection title="Formularios" bgColor="bg-orange-600">
                    <p>
                        Los formularios permiten recopilar información del usuario:
                    </p>
                    <pre className="bg-gray-900 text-green-200 rounded-md p-4 overflow-x-auto text-sm mt-2">
{`<form action="/procesar" method="POST">
  <!-- Campo de texto -->
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre" required>
  
  <!-- Campo de email -->
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  
  <!-- Campo de contraseña -->
  <label for="password">Contraseña:</label>
  <input type="password" id="password" name="password" required>
  
  <!-- Área de texto -->
  <label for="mensaje">Mensaje:</label>
  <textarea id="mensaje" name="mensaje" rows="4"></textarea>
  
  <!-- Botón de envío -->
  <button type="submit">Enviar</button>
</form>`}
                    </pre>
                </CourseSection>
                
                <CourseSection title="Tablas" bgColor="bg-orange-600">
                    <p>
                        Las tablas organizan datos en filas y columnas:
                    </p>
                    <pre className="bg-gray-900 text-green-200 rounded-md p-4 overflow-x-auto text-sm mt-2">
{`<table border="1">
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Edad</th>
      <th>Ciudad</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Juan</td>
      <td>25</td>
      <td>Madrid</td>
    </tr>
    <tr>
      <td>María</td>
      <td>30</td>
      <td>Barcelona</td>
    </tr>
  </tbody>
</table>`}
                    </pre>
                </CourseSection>
                
                <CourseSection title="Elementos multimedia" bgColor="bg-orange-600">
                    <p>
                        HTML5 introdujo elementos nativos para multimedia:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                        <div>
                            <h4 className="font-semibold mb-2">Video:</h4>
                            <pre className="bg-gray-900 text-green-200 rounded-md p-3 overflow-x-auto text-sm">
{`<video width="320" height="240" controls>
  <source src="video.mp4" type="video/mp4">
  <source src="video.ogg" type="video/ogg">
  Tu navegador no soporta video.
</video>`}
                            </pre>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Audio:</h4>
                            <pre className="bg-gray-900 text-green-200 rounded-md p-3 overflow-x-auto text-sm">
{`<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  <source src="audio.ogg" type="audio/ogg">
  Tu navegador no soporta audio.
</audio>`}
                            </pre>
                        </div>
                    </div>
                </CourseSection>
                
                <CourseSection title="Elementos semánticos HTML5" bgColor="bg-orange-600">
                    <p>
                        HTML5 introdujo elementos semánticos que mejoran la estructura y accesibilidad:
                    </p>
                    <pre className="bg-gray-900 text-green-200 rounded-md p-4 overflow-x-auto text-sm mt-2">
{`<header>
  <h1>Título de la página</h1>
  <nav>
    <a href="#inicio">Inicio</a>
    <a href="#sobre">Sobre</a>
  </nav>
</header>

<main>
  <article>
    <h2>Artículo principal</h2>
    <p>Contenido del artículo...</p>
  </article>
  
  <aside>
    <h3>Información adicional</h3>
    <p>Contenido relacionado...</p>
  </aside>
</main>

<footer>
  <p>&copy; 2024 Mi Sitio Web</p>
</footer>`}
                    </pre>
                </CourseSection>
                
                <CourseSection title="Atributos importantes" bgColor="bg-orange-600">
                    <p>
                        Algunos atributos esenciales que debes conocer:
                    </p>
                    <ul className="list-disc list-inside ml-4 mt-2">
                        <li><code>id</code> - Identificador único para el elemento</li>
                        <li><code>class</code> - Clase CSS para aplicar estilos</li>
                        <li><code>title</code> - Información adicional que aparece al pasar el mouse</li>
                        <li><code>data-*</code> - Atributos personalizados para almacenar datos</li>
                        <li><code>aria-*</code> - Atributos para mejorar la accesibilidad</li>
                    </ul>
                </CourseSection>
        </div>
    );
}
