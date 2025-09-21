// Importaciones de imágenes y componentes necesarios
// import pythonImage from '../assets/python.png';
import promptin from '../assets/promptin.svg';
// import htmlImage from '../assets/html_logo_course.png';
import ExportCourse from '../components/Courses/ExportCourse';
import CourseNavigation from '../components/Courses/CourseNavigation';
import { CourseNavigationNext } from '../components/Courses/CourseNavigation';
import { useOutlet } from 'react-router-dom';

/**
 * Componente principal de la página de cursos
 * Maneja tanto la lista de cursos como la navegación dentro de cada curso
 */
export default function Courses() {
    // Hook que detecta si hay contenido hijo (outlet) renderizado
    // Si hay outlet, significa que estamos dentro de un curso específico
    const outlet = useOutlet();

    // Configuraciones para diferentes cursos
    // Cada curso tiene su propia configuración de rutas y secciones
    const courseConfigs = {
        // Configuración para el curso de Programación 101
        programacion101: {
            coursePath: 'basicprogramming/basicprogramming',  // Ruta base del curso
            sections: [0, 1],                              // Secciones disponibles (0 y 1)
            endPath: 'basicprogramming/basicprogramming_end'    // Ruta de la página de fin
        },
        // Configuración para el curso de Python
        python: {
            coursePath: 'python/python',                    // Ruta base del curso
            sections: [1, 2],                              // Secciones disponibles (1 y 2)
            endPath: 'python/python_end'                    // Ruta de la página de fin
        },
        // Configuración para el curso de HTML
        html: {
            coursePath: 'html/html',                        // Ruta base del curso
            sections: [1, 2, 3],                              // Secciones disponibles (1 y 2)
            endPath: 'html/html_end'                        // Ruta de la página de fin
        }
    };

    // Función que detecta qué curso está activo basado en la ruta actual
    // Esto permite usar la configuración correcta para cada curso
    const getActiveCourseConfig = () => {
        // Si la ruta contiene 'basicprogramming', usa la configuración de Programación 101
        if (window.location.pathname.includes('basicprogramming')) {
            return courseConfigs.programacion101;
        } 
        // Si la ruta contiene 'python', usa la configuración de Python
        // else if (window.location.pathname.includes('python')) {
        //     return courseConfigs.python;
        // }
        // Si la ruta contiene 'html', usa la configuración de HTML
        // else if (window.location.pathname.includes('html')) {
        //     return courseConfigs.html;
        // }
        // Por defecto, usa la configuración de Programación 101
        return courseConfigs.programacion101;
    };
    return (
        <section className='flex flex-col p-8 gap-10'>
            {/* 
                Si NO hay contenido hijo (outlet) → muestra la lista principal de cursos
                Esto ocurre cuando el usuario está en /cursos sin estar dentro de un curso específico
            */}
            {!outlet && (
                <div className="flex flex-wrap gap-10 justify-center">
                    {/* Tarjetas de cursos disponibles */}
                    <ExportCourse titleCourse="Programación 101" imagesrc={promptin} linkTo="basicprogramming" />
                    {/* <ExportCourse titleCourse="Python" imagesrc={pythonImage} linkTo="python" /> */}
                    {/* <ExportCourse titleCourse="Html" imagesrc={htmlImage} linkTo="html" /> */}
                </div>
            )}

            {/* 
                Si hay contenido hijo (outlet) → muestra los botones de navegación
                Esto ocurre cuando el usuario está dentro de un curso específico
                Pasa la configuración del curso activo al componente de navegación
            */}
            {outlet && (
                    <CourseNavigation courseConfig={getActiveCourseConfig()} />
            )}

            {/* 
                Renderiza el contenido hijo (outlet)
                Aquí se muestra el contenido del curso específico que está activo
            */}
            {outlet}
            {outlet && (
                <CourseNavigationNext courseConfig={getActiveCourseConfig()} />
            )}
        </section>
    );
}