import Titles from "../../../components/General/Titles";
import CourseSection from "../../../components/Courses/CourseSection";

export default function Html_1() {
    return (
        <div className="flex flex-col gap-5 md:w-8/10 max-w-5xl">
            <Titles 
                title="HTML - Sección 1" 
                text="Pero... ¿Por qué aprender HTML?"
            />
            <CourseSection
                title="HTML sive para...">
                <p>HTML (HyperText Markup Language) es el lenguaje estándar para crear páginas web. Es el primer lenguaje que debes aprender si deseas crear contenido en la web. HTML se utiliza para estructurar y dar formato al contenido, como texto, imágenes, enlaces y videos.</p>
            </CourseSection>
        </div>
    )
}