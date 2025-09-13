import { useNavigate, useLocation } from 'react-router-dom';

// Interfaz que define la configuración de un curso
interface CourseConfig {
  coursePath: string;        // Ruta base del curso (ej: "basicprograming/basicprogramin")
  sections: number[];        // Array con los números de secciones disponibles (ej: [1, 2])
  endPath: string;          // Ruta de la página de fin (ej: "basicprograming/basicprogramin_end")
}

export function useCourseNavigation(config: CourseConfig) {
  const navigate = useNavigate();  // Hook para navegar programáticamente
  const location = useLocation();  // Hook para obtener la ubicación actual

  // Detecta si estamos en una ruta anidada (outlet dentro de outlet)
  // Esto ocurre cuando estamos en una subsección del curso
  const isNestedRoute = location.pathname.split('/').length > 3;
  
  // Detecta si estamos en la página de fin del curso
  const isEndPage = location.pathname.includes(config.endPath);

  // Obtiene la sección actual basada en el patrón del curso
  // Busca patrones como "basicprogramin_1", "basicprogramin_2", etc.
  const getCurrentSection = (): number => {
    // Extrae el número de la sección del pathname
    // Ejemplo: "/cursos/basicprograming/basicprogramin_1" -> extrae "1"
    const pattern = new RegExp(`${config.coursePath}_(\\d+)`);
    const match = location.pathname.match(pattern);
    return match ? parseInt(match[1], 10) : 0;
  };

  // Navega a la siguiente sección del curso
  const goToNextSection = () => {
    const currentSection = getCurrentSection();  // Obtiene la sección actual
    const nextSection = currentSection + 1;       // Calcula la siguiente sección
    
    // Construye la ruta de destino
    // Si la siguiente sección existe en el array de secciones disponibles, va a esa sección
    // Si no existe, va a la página de fin
    const targetPath = config.sections.includes(nextSection) 
      ? `${config.coursePath}_${nextSection}`  // CORREGIDO: usa guión bajo en lugar de barra
      : config.endPath;
    
    // Función que ejecuta la navegación
    const go = () => navigate(targetPath);
    
    // Si el navegador soporta View Transitions, las usa para una transición suave
    // Si no, navega normalmente
    if (document.startViewTransition) {
      document.startViewTransition(go);
    } else {
      go();
    }
  };

  // Navega a la sección anterior usando el historial del navegador
  const goToPreviousSection = () => {
    const go = () => navigate(-1);  // -1 significa "ir a la página anterior"
    
    // Aplica View Transition si está disponible
    if (document.startViewTransition) {
      document.startViewTransition(go);
    } else {
      go();
    }
  };

  // Navega de vuelta a la lista principal de cursos
  const goBackToCourses = () => {
    const go = () => navigate("/cursos");  // Va directamente a la ruta de cursos
    
    // Aplica View Transition si está disponible
    if (document.startViewTransition) {
      document.startViewTransition(go);
    } else {
      go();
    }
  };

  // Retorna todas las funciones y estados para usar en los componentes
  return {
    isNestedRoute,           // Si estamos en una ruta anidada
    isEndPage,              // Si estamos en la página de fin
    getCurrentSection,      // Función para obtener la sección actual
    goToNextSection,        // Función para ir a la siguiente sección
    goToPreviousSection,    // Función para ir a la sección anterior
    goBackToCourses         // Función para volver a la lista de cursos
  };
}
