import Titles from "../../../components/General/Titles";
import CourseSection from "../../../components/Courses/CourseSection";
import { useOutlet } from "react-router-dom";

export default function Programacion101() {
    const bgColorNew = "bg-yellow-500"
    const titleColorNew = "text-black"
    const outlet = useOutlet();

    return (
        <div>
            {/* Si NO hay contenido hijo → muestra el contenido principal */}
            {!outlet && (
                <section className="flex flex-col items-center">
                    <Titles title="Básicos de programación" text="¡Bienvenide! Aquí aprenderás los conceptos fundamentales que necesitas para empezar a programar, sin importar el lenguaje que elijas en el futuro. <br/>Estos son los pilares que te ayudarán a entender cualquier tecnología." />
                    <div className="flex flex-col gap-8 md:w-8/10 max-w-5xl pt-10">
                        <CourseSection bgColor={bgColorNew} titleColor={titleColorNew} title="¿Qué es esto de programar?">
                            <p>
                                ¡Bienvenide al mundo del código! Programar es básicamente como ser un mago digital: escribes unas palabras especiales (código) y ¡pum! 🪄 haces que el ordenador haga cosas por ti. Es como darle instrucciones a un ayudante muy obediente... pero que necesita que le digas exactamente lo que quieres.
                            </p>
                        </CourseSection>

                        <CourseSection bgColor={bgColorNew} titleColor={titleColorNew} title="¿Y esto para qué me va a servir? 🤔">
                            <p>
                                ¡Para un montón de cosas! Imagina poder crear tus propios juegos, hacer que tu PC trabaje por ti, o incluso desarrollar la próxima app viral. La programación es como tener un superpoder en el mundo digital. 
                            </p>
                            <p>
                                Por ejemplo, ¿te ha pasado alguna vez tener que hacer una tarea súper repetitiva en el ordenador? Digamos... renombrar 200 fotos de tus vacaciones una por una 😫. Con programación, podrías hacer un pequeño programa que lo haga por ti en segundos mientras tú te tomas un café ☕.
                            </p>
                            <img src="https://api.memegen.link/images/ugandanknuck/Humano listo/Humano aprende a ser Mr. Robot.png" className="md:w-1/2 mx-auto pt-8"/>
                            <p className="font-light text-xs text-center text-gray-400">
                                ¡Mira! Este meme lo hemos creado usando programación. Es un ejemplo súper simple de cómo podemos hacer que internet trabaje para nosotros. 
                                Solo necesitamos una URL especial y ¡voilà! 🎩
                            </p>
                        </CourseSection>

                        <CourseSection bgColor={bgColorNew} titleColor={titleColorNew} title="¿Necesito ser un genio de las mates? 🧮">
                            <p>
                                ¡Para nada! Lo más importante es tener curiosidad y ganas de resolver problemas. Es como aprender un nuevo idioma: al principio parece complicado, pero con práctica todo empieza a tener sentido. Si sabes seguir una receta de cocina, ¡ya tienes la lógica básica para programar! 
                            </p>
                        </CourseSection>

                        <CourseSection bgColor={bgColorNew} titleColor={titleColorNew} title="¿Por dónde empezamos? 🚀">
                            <p>
                                Vamos a empezar por lo básico y poco a poco iremos construyendo cosas más chulas. Es como cuando aprendes a andar en bici: primero con rueditas, y antes de que te des cuenta, ¡estarás haciendo trucos! 
                            </p>
                            <p>
                                En este curso vamos a aprender jugando y experimentando. Nada de rollos teóricos aburridos - aquí todo es práctico y divertido. 🎮
                            </p>
                        </CourseSection>

                    </div>
                    <div className="mt-10 text-center">
                        <p className="text-lg font-semibold">
                            ¿Liste para empezar a programar? 🚀
                        </p>
                        <p className="text-gray-400 mt-2">
                            Sigue aprendiendo en la siguiente sección.
                        </p>
                    </div>
                </section>
            )}

            {/* Renderiza el contenido hijo */}
            {outlet}
        </div>
    );
}