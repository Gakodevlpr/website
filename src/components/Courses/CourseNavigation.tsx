import { useCourseNavigation } from '../../hooks/useCourseNavigation';

// Interfaz que define las props que recibe este componente
interface CourseNavigationProps {
  courseConfig: {
    coursePath: string;    // Ruta base del curso
    sections: number[];   // Array de secciones disponibles
    endPath: string;      // Ruta de la página de fin
  };
}

/**
 * Componente reutilizable que renderiza los botones de navegación para cualquier curso
 * Se adapta automáticamente según el contexto (si estamos en una subsección, en el final, etc.)
 */
export default function CourseNavigation({ courseConfig }: CourseNavigationProps) {
  // Usa el hook personalizado para obtener todas las funciones y estados de navegación
  const { 
    isNestedRoute,        // Si estamos en una ruta anidada (subsección)
    isEndPage,           // Si estamos en la página de fin del curso
    goToNextSection,     // Función para ir a la siguiente sección
    goToPreviousSection, // Función para ir a la sección anterior
    goBackToCourses      // Función para volver a la lista de cursos
  } = useCourseNavigation(courseConfig);

  return (
    <div className="flex justify-end mb-6 gap-3">
      {/* 
        Botón "Sección anterior" 
        Solo aparece cuando estamos en una ruta anidada (no en la página principal del curso)
        Esto evita mostrar el botón cuando estamos en la primera página
      */}
      {isNestedRoute && (
        <button
          onClick={goToPreviousSection}  // Ejecuta la función para ir atrás
          className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
        >
          ← Anterior
        </button>
      )}

      {/* 
        Botón "Volver a cursos" 
        Siempre aparece cuando hay contenido hijo (outlet)
        Permite al usuario volver a la lista principal de cursos desde cualquier punto
      */}
      <button
        onClick={goBackToCourses}  // Ejecuta la función para volver a cursos
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        ↑ Volver a cursos
      </button>
      
      {/* 
        Botón "Siguiente" 
        Solo aparece si NO estamos en la página de fin del curso
        Se oculta automáticamente cuando el usuario llega al final
      */}
      {!isEndPage && (
        <button
          onClick={goToNextSection}  // Ejecuta la función para ir a la siguiente sección
          className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
        >
          Siguiente →
        </button>
      )}
    </div>
  );
}
