import { Helmet } from 'react-helmet-async';
import Logo from './assets/logo.svg?react';
import Menu from './components/General/Menu';
import { useState } from 'react';
import { newsItems } from './News';

export default function Homepage() {
  // Estado para controlar la visibilidad de las noticias
  const [isVisibility, setVisibility] = useState(false)
  
  // Array de noticias (fácil de modificar para agregar/quitar contenido)
  
  // Función que determina si hay muchas noticias (más de 4)
  const hasManyNews = newsItems.length > 4;
  
  return (
    <>
      <Helmet>
        <title>Gakodevlpr - Homepage</title>
        {/* SEO content */}
        <meta name="description" content="Web de Gakodevlpr" />
        <meta name="keywords" content="Programación, Desarrollo, Web, Gakodevlpr" />
        <meta name="author" content="Gakodevlpr" />
      </Helmet>
      
      {/* Contenedor principal con altura completa de la pantalla */}
      <div className="min-h-screen flex flex-col">
        {/* 
          Div principal que contiene el logo y menú
          - Inicialmente centrado en la pantalla (justify-center)
          - Cuando hay pocas noticias: se mantiene centrado pero con menos espacio
          - Cuando hay muchas noticias: se desplaza hacia arriba completamente
          - Transición suave entre ambos estados con timing coordinado
        */}
        <div 
          id="1" 
          className={`flex flex-col items-center transition-all duration-700 ease-in-out ${
            isVisibility 
              ? 'justify-start pb-8 flex-1' // Muchas noticias: se desplaza hacia arriba
              : 'justify-center flex-1' // Estado inicial: centrado en la pantalla
          }`}
        >
          {/* Logo con tamaño responsivo */}
          <Logo className='w-[300px] md:w-[400px]' />
          
          {/* Menú de navegación */}
          <Menu
            navItems={[
              { to: '/bienvenida', label: 'Bienvenida' },
              { to: '/recursos', label: 'Recursos' },
              { to: '/cursos', label: 'Cursos' },
            ]}
          />
        </div>
        
        {/* 
          Contenedor del botón de noticias y el contenido
          - Siempre centrado horizontalmente
          - Se posiciona después del contenido principal
        */}
        <div className='flex flex-col items-center pb-18'>
          {/* 
            Botón SVG para mostrar/ocultar noticias
            - Cursor pointer para indicar que es clickeable
            - Rotación suave cuando está activo
          */}
          <svg
            aria-expanded={isVisibility}
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setVisibility((v) => !v)}
            className={`cursor-pointer transition-transform duration-500 ${
              isVisibility ? 'rotate-180' : 'rotate-0'
            }`}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.2416 4.64146L11.9989 0.398819L7.75629 4.64146L11.0003 7.88551L11.013 19.7865L9.16846 17.9523L7.75821 19.3704L12.0127 23.6012L16.2437 19.3466L14.8255 17.9363L13.013 19.7591L13.0003 7.8827L16.2416 4.64146ZM10.5847 4.64146L11.9989 3.22725L13.4131 4.64146L11.9989 6.05567L10.5847 4.64146Z"
              fill="currentColor"
            />
          </svg>
          
          {/* 
            Contenido de noticias que aparece/desaparece
            - Altura adaptativa: pequeña para pocas noticias, grande para muchas
            - Transición suave que mantiene el contenido principal visible
            - Diseño responsivo para móviles y desktop
            - Usa el array dinámico de noticias
          */}
          <div 
            className={`transition-all duration-700 ease-out overflow-hidden ${
              isVisibility 
                ? 'opacity-100 transform translate-y-0' // Pocas noticias: altura pequeña
                : 'max-h-0 opacity-0 transform translate-y-4'
            }`}
          >
            <div className={`transition-all duration-500 ease-out ${
              isVisibility ? 'transform translate-y-0 opacity-100' : 'transform translate-y-2 opacity-0'
            }`}>
              <h3 className='flex justify-center mt-4 text-lg font-semibold text-gray-200'>News</h3>
              <div className='mt-4 space-y-2 text-center text-gray-300 px-4'>
                {/* Renderiza dinámicamente las noticias del array */}
                {newsItems.map((news, index) => (
                  <p key={index}>{news}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
