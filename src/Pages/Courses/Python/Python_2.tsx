import Titles from "../../../components/General/Titles";
import CourseSection from "../../../components/Courses/CourseSection";

export default function Python_2() {
    return (
        <div className="flex flex-col gap-8 md:w-8/10 max-w-5xl">
            <Titles 
                title="Python - Sección 2" 
                text="Estructuras de control en Python"
            />
            
            <CourseSection title="Condicionales (if, elif, else)">
                <p>
                    Los condicionales te permiten ejecutar código solo si se cumple una condición.
                </p>
                <pre className="bg-gray-800 p-4 rounded-lg mt-4 text-gray-300">
                    <code>
{`edad = 18
if edad >= 18:
    print("Eres mayor de edad")
elif edad >= 13:
    print("Eres adolescente")
else:
    print("Eres menor de edad")`}
                    </code>
                </pre>
            </CourseSection>
            
            <CourseSection title="Bucles (for, while)">
                <p>
                    Los bucles te permiten repetir código varias veces.
                </p>
                <pre className="bg-gray-800 p-4 rounded-lg mt-4 text-gray-300">
                    <code>
{`# Bucle for
for i in range(5):
    print(f"Número: {i}")

# Bucle while
contador = 0
while contador < 3:
    print(f"Contador: {contador}")
    contador += 1`}
                    </code>
                </pre>
            </CourseSection>
        </div>
    );
}
