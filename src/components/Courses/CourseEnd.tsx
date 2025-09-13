// Interfaz que define las props opcionales que puede recibir este componente
interface CourseEndProps {
  courseName?: string;      // Nombre del curso (opcional, por defecto "este curso")
  message?: string;         // Mensaje principal (opcional, tiene un mensaje por defecto)
  additionalMessage?: string; // Mensaje adicional (opcional, tiene un mensaje por defecto)
}

/**
 * Componente reutilizable que muestra una página de fin de curso
 * Se puede personalizar completamente con diferentes mensajes para cada curso
 * Tiene valores por defecto para que funcione sin configuración
 */
export default function CourseEnd({ 
  courseName = "este curso",  // Valor por defecto si no se proporciona
  message = `¡Felicitaciones! Has completado todas las secciones disponibles de ${courseName}.`,
  additionalMessage = "Pronto agregaremos más contenido. ¡Mantente atento!"
}: CourseEndProps) {
  return (
    // Contenedor principal centrado vertical y horizontalmente
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
      {/* 
        Tarjeta de mensaje con estilo verde (éxito/completado)
        Usa clases de Tailwind para el diseño responsivo y atractivo
      */}
      <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg max-w-md">
        {/* Título principal con emoji de celebración */}
        <h2 className="text-2xl font-bold mb-4">🎉 ¡Has llegado al final!</h2>
        
        {/* Mensaje principal personalizable */}
        <p className="text-lg mb-4">
          {message}
        </p>
        
        {/* Mensaje adicional más pequeño y en color más suave */}
        <p className="text-sm text-green-600">
          {additionalMessage}
        </p>
      </div>
    </div>
  );
}
