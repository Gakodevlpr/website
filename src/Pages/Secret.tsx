import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const SECRET_PASSWORD = 'GakoDev2025'; // Change this to whatever you want to hide in your site

const Secret: React.FC = () => {
  const [input, setInput] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === SECRET_PASSWORD) {
      setUnlocked(true);
      setError('');
    } else {
      setError('Contraseña incorrecta. ¿Seguro que encontraste la pista?');
    }
  };

  return (
    <>
      <Helmet>
        <title>🥚 Easter Egg – GakoDevLpr</title>
      </Helmet>

      <main className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black flex items-center justify-center p-8">
        <section className="max-w-2xl text-center text-white space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-yellow-400">
            ¡Felicidades, explorador!
          </h1>

          {!unlocked ? (
            <>
              <p className="text-lg md:text-xl leading-relaxed">
                Has descubierto el huevo de pascua oculto en mi web.  
                Pero el verdadero premio está protegido. Introduce la contraseña que encontraste:
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="password"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Contraseña"
                  className="w-full max-w-sm mx-auto px-4 py-2 rounded-lg text-black outline-none bg-white"
                />
                {error && <p className="text-red-400 text-sm">{error}</p>}
                <button
                  type="submit"
                  className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 text-black font-bold hover:scale-105 transition-transform"
                >
                  Desbloquear
                </button>
              </form>
            </>
          ) : (
            <>
              <p className="text-lg md:text-xl leading-relaxed">
                Aquí tienes tu premio: un PDF con una guía rápida para empezar a programar. ¡Aprovecha tu curiosidad!
              </p>

              <div className="flex justify-center">
                <a
                  href="https://github.com/getify/You-Dont-Know-JS/raw/1st-ed/README.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-gray-800 to-gray-600 text-white font-bold shadow-2xl hover:scale-105 transition-transform"
                >
                  📘 Descargar PDF: «You Don’t Know JS» (Guía intro)
                </a>
              </div>

              <p className="text-sm text-gray-300">
                Puedes compartir tu hallazgo con el hashtag{" "}
                <span className="font-semibold text-yellow-300">#GakoEasterEgg</span>
              </p>

              <a
                href="/"
                className="inline-block mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 text-black font-bold hover:scale-105 transition-transform"
              >
                Volver al inicio
              </a>
            </>
          )}
        </section>
      </main>
    </>
  );
};

export default Secret;
