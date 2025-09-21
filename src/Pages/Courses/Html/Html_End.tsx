import CourseEnd from "../../../components/Courses/CourseEnd";

export default function Html_End() {
    return (
        <section className="flex flex-col items-center">
            {/* Componente de fin de curso personalizado para HTML */}
            <CourseEnd 
                courseName="HTML"
                message="¡Felicitaciones! Has completado todas las secciones del curso de HTML. Ahora conoces los fundamentos del lenguaje de marcado más importante para la web."
                additionalMessage="Continúa aprendiendo con CSS para dar estilo a tus páginas y JavaScript para hacerlas interactivas. ¡El mundo del desarrollo web te espera!"
            />
        </section>
    );
}
