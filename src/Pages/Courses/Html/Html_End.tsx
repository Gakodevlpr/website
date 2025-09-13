import CourseEnd from "../../../components/Courses/CourseEnd";
import CourseNavigation from "../../../components/Courses/CourseNavigation";

export default function Html_End() {
    // Configuración del curso para la navegación
    const courseConfig = {
        coursePath: "html",  // Ruta base del curso
        sections: [1, 2],    // Secciones disponibles
        endPath: "html_end"  // Ruta de la página de fin
    };

    return (
        <section className="flex flex-col items-center">
            {/* Componente de navegación */}
            <CourseNavigation courseConfig={courseConfig} />
            
            {/* Componente de fin de curso personalizado para HTML */}
            <CourseEnd 
                courseName="HTML"
                message="¡Felicitaciones! Has completado todas las secciones del curso de HTML. Ahora conoces los fundamentos del lenguaje de marcado más importante para la web."
                additionalMessage="Continúa aprendiendo con CSS para dar estilo a tus páginas y JavaScript para hacerlas interactivas. ¡El mundo del desarrollo web te espera!"
            />
        </section>
    );
}
