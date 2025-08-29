import { Helmet } from "react-helmet-async"

export default function Home(){
    return(
        <>
            <Helmet>
                <title>Gakodevlpr - Bienvenide</title>
                <meta name="description" content="Web de Gakodevlpr" />
                <meta name="keywords" content="Programación, Desarrollo, Web, Gakodevlpr" />
                <meta name="author" content="Gakodevlpr" />
            </Helmet>
            <main id="welcome" className="relative flex flex-col justify-center items-center px-4 py-16">
                <section className="text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-widest">
                        Bienvenide a mi espacio digital
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-white leading-relaxed">
                        ¡Hola! Soy Gakodevlpr y este es mi viaje de aprendizaje en programación.<br/>
                        Aquí voy documentando poco a poco mi aprendizaje en programación.
                        ¡Espero que te guste!
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                        <a
                            href="https://github.com/Gakodevlpr" 
                            className="px-8 py-3 bg-white text-black rounded-lg transition-colors"
                        >
                            Ver proyectos
                        </a>
                    </div>
                </section>

                <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"> {/* Need to change md:grid-cols when adding or deleting cards */}
                    <section id="welcomes" className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                        <h3>Aprendizaje Continuo</h3>
                        <p>Compartimos nuestro proceso de aprendizaje y crecimiento en el mundo tech.</p>
                    </section>
                    <section id="welcomes" className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                        <h3>Comunidad Inclusiva</h3>
                        <p>Un espacio seguro donde todes pueden aprender y compartir.</p>
                    </section>
                    <section id="welcomes" className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                        <h3>Proyectos Reales</h3>
                        <p>Desarrollo de proyectos prácticos para aprender haciendo.</p>
                    </section>
                </section>

                <section className="border-1 border-gray-400 rounded-3xl mt-5 md:max-w-5xl">
                    <div className="p-5">
                        <h3 className="text-xl font-semibold mb-3">Sobre mi</h3>
                        <p>
                            Mi nombre es Gabriel y soy un apasionado por la programación. Me encanta aprender nuevas tecnologías y resolver problemas.
                            <br/><br/>
                            Soy simplemente un chaval que, como muchos, se sintió atraído por el mundo de la programación y desde noviembre de 2024 no he dejado de explorar y aprender sobre todo lo relacionado con el "coding".

                        </p>
                    </div>
                </section>
            </main>
        </>
    )
}
