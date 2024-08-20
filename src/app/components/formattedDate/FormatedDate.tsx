import React from 'react';

interface FormattedDateProps {
  fecha: string;
}

function FormattedDate({ fecha }: FormattedDateProps) {
  const date = new Date(fecha);

  // Formatear la fecha
  const formattedDate = date.toLocaleDateString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  });

  // Formatear la hora
  const formattedTime = date.toLocaleTimeString('es-ES', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  // Combinar fecha y hora
  const formattedDateTime = `${formattedDate} ${formattedTime}`;

  return <p>Última actualización: {formattedDateTime}</p>;
}

export default FormattedDate;
