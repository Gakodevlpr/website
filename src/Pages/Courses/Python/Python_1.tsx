import Titles from "../../../components/General/Titles";
import CourseSection from "../../../components/Courses/CourseSection";

export default function Python_1() {
    return (
        <div className="flex flex-col gap-8 md:w-8/10 max-w-5xl">
            <Titles 
                title="Python - Sección 1" 
                text="Variables y tipos de datos en Python"
            />
            
            <CourseSection title="Variables en Python">
                <p>
                    En Python, las variables se crean simplemente asignando un valor. No necesitas declarar el tipo de variable.
                </p>
                <pre className="bg-gray-600 p-4 rounded-lg mt-4">
                    <code>
{`# Ejemplos de variables
nombre = "Juan"
edad = 25
altura = 1.75
es_estudiante = True`}
                    </code>
                </pre>
            </CourseSection>
            
            <CourseSection title="Tipos de datos básicos">
                <ul className="list-disc list-inside ml-4 mt-2">
                    <li><strong>int:</strong> Números enteros (1, 2, 3)</li>
                    <li><strong>float:</strong> Números decimales (1.5, 2.7)</li>
                    <li><strong>str:</strong> Cadenas de texto ("Hola", 'Mundo')</li>
                    <li><strong>bool:</strong> Valores booleanos (True, False)</li>
                </ul>
            </CourseSection>
        </div>
    );
}
